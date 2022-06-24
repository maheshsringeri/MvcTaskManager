using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Collections.Generic;
using MvcTaskManager.Models;
using System.Linq;

namespace MvcTaskManager.Controllers
{
    public class TaskPrioritiesController : Controller
    {
        private ApplicationDbContext _db;

        public TaskPrioritiesController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("api/taskpriorities")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public List<TaskPriority> Get()
        {
            List<TaskPriority> taskPriorities = _db.TaskPriorities.ToList();
            return taskPriorities;
        }

        [HttpGet]
        [Route("api/taskpriorities/searchbytaskpriorityid/{TaskPriorityID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByTaskPriorityID(int TaskPriorityID)
        {
            TaskPriority taskPriority = _db.TaskPriorities.FirstOrDefault(q => q.TaskPriorityID == TaskPriorityID);
            if (taskPriority != null)
            {
                return Ok(taskPriority);
            }
            else
            {
                return NoContent();
            }
        }


        [HttpPost]
        [Route("api/taskpriorities")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskPriority Post([FromBody] TaskPriority taskPriority)
        {
            _db.TaskPriorities.Add(taskPriority);
            _db.SaveChanges();

            TaskPriority existingTaskPriority = _db.TaskPriorities.FirstOrDefault(q => q.TaskPriorityID == taskPriority.TaskPriorityID);

            return existingTaskPriority;
        }

        [HttpPut]
        [Route("api/taskpriorities")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskPriority Put([FromBody] TaskPriority taskPriority)
        {
            TaskPriority existingTaskPriority = _db.TaskPriorities.FirstOrDefault(q => q.TaskPriorityID == taskPriority.TaskPriorityID);

            if (existingTaskPriority != null)
            {
                existingTaskPriority.TaskPriorityName = taskPriority.TaskPriorityName;
                _db.SaveChanges();

                return existingTaskPriority;
            }
            else
            {
                return null;
            }
        }


        [HttpDelete]
        [Route("api/taskpriorities")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int TaskPriorityID)
        {
            TaskPriority existingTaskPriority = _db.TaskPriorities.FirstOrDefault(q => q.TaskPriorityID == TaskPriorityID);

            if (existingTaskPriority != null)
            {
                _db.TaskPriorities.Remove(existingTaskPriority);
                _db.SaveChanges();

                return TaskPriorityID;

            }
            else
            {
                return -1;
            }
        }

    }
}

