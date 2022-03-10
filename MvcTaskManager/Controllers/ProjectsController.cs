using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using MvcTaskManager.ViewModels;
using AutoMapper;

namespace MvcTaskManager.Controllers
{

    public class ProjectsController : Controller
    {
        private ApplicationDbContext db = null;
        private readonly IMapper _mapper;

        public ProjectsController(ApplicationDbContext applicationDbContext, IMapper mapper)
        {
            this.db = applicationDbContext;
            this._mapper = mapper;
        }


        [HttpGet]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public List<ProjectViewModel> Get()
        {
            System.Threading.Thread.Sleep(1000);

            List<Project> projects = db.Projects.Include("ClientLocation").ToList();

            List<ProjectViewModel> projectViewModels = new List<ProjectViewModel>();

            projectViewModels = _mapper.Map<List<ProjectViewModel>>(projects);

            return projectViewModels;
        }

        [HttpPost]
        [Route("api/projects")]
        [Authorize]
        [ValidateAntiForgeryToken]
        public IActionResult Post([FromBody] Project project)
        {
            project.ClientLocation = null;
            db.Projects.Add(project);
            db.SaveChanges();

            Project exitingProject = db.Projects.Include("ClientLocation").FirstOrDefault(q => q.ProjectID == project.ProjectID);

            ProjectViewModel projectViewModel = _mapper.Map<ProjectViewModel>(exitingProject);

            return Ok(projectViewModel);
        }

        [HttpPut]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Put([FromBody] Project project)
        {
            Project ExistingProject = db.Projects.FirstOrDefault(q => q.ProjectID == project.ProjectID);
            if (ExistingProject != null)
            {
                ExistingProject.ProjectName = project.ProjectName;
                ExistingProject.DateOfStart = project.DateOfStart;
                ExistingProject.TeamSize = project.TeamSize;
                ExistingProject.Active = project.Active;
                ExistingProject.Status = project.Status;
                ExistingProject.ClientLocationID = project.ClientLocationID;
                ExistingProject.ClientLocation = null;

                db.SaveChanges();


                Project existingProject = db.Projects.Include("ClientLocation").FirstOrDefault(q => q.ProjectID == project.ProjectID);
                ProjectViewModel projectViewModel = _mapper.Map<ProjectViewModel>(existingProject);

                return Ok(projectViewModel);
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/projects")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int ProjectId)
        {
            Project ExistingProject = db.Projects.FirstOrDefault(q => q.ProjectID == ProjectId);

            if (ExistingProject != null)
            {
                db.Projects.Remove(ExistingProject);
                db.SaveChanges();

                return ProjectId;
            }
            else
            {
                return -1;
            }
        }

        [HttpGet]
        [Route("api/projects/search/{searchby}")]
        [Route("api/projects/search/{searchby}/{searchtext}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public List<ProjectViewModel> Search(string searchBy, string searchText = "")
        {
            List<Project> projects = null;
            List<ProjectViewModel> projectViewModels = null;

            if (searchText == "")
            {
                projects = db.Projects.Include("ClientLocation").ToList();

                projectViewModels = _mapper.Map<List<ProjectViewModel>>(projects);

                return projectViewModels;
            }

            if (searchBy == "ProjectID")
            {
                projects = db.Projects.Include("ClientLocation").Where(q => q.ProjectID.ToString().Contains(searchText)).ToList();
            }
            else if (searchBy == "ProjectName")
            {
                projects = db.Projects.Include("ClientLocation").Where(q => q.ProjectName.Contains(searchText)).ToList();
            }
            else if (searchBy == "DateOfStart")
            {
                projects = db.Projects.Include("ClientLocation").Where(q => q.DateOfStart.ToString().Contains(searchText)).ToList();
            }
            else if (searchBy == "TeamSize")
            {
                projects = db.Projects.Include("ClientLocation").Where(q => q.TeamSize.ToString().Contains(searchText)).ToList();
            }

            projectViewModels = _mapper.Map<List<ProjectViewModel>>(projects);
            return projectViewModels;
        }
    }
}
