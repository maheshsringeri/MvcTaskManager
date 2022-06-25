using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using MvcTaskManager.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace MvcTaskManager.Controllers
{
    public class TaskStatusController : Controller
    {
        private ApplicationDbContext _db;

        public TaskStatusController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("api/taskstatus")]
       // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public List<TaskStatus> Get()
        {
            List<TaskStatus> taskStatuses = _db.TaskStatuses.ToList();

            return taskStatuses;
        }

        [HttpGet]
        [Route("api/taskstatus/searchbytaskstatusid/{TaskStatusID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByTaskSctatusID(int TaskStatusID)
        {
            TaskStatus taskStatus = _db.TaskStatuses.FirstOrDefault(q => q.TaskStatusID == TaskStatusID);

            if (taskStatus != null)
            {
                return Ok(taskStatus);
            }
            else
            {
                return NoContent();
            }

        }


        [HttpPost]
        [Route("api/taskstatus")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskStatus Post([FromBody] TaskStatus taskStatus)
        {
            _db.Add(taskStatus);
            _db.SaveChanges();

            TaskStatus newTaskStatus = _db.TaskStatuses.FirstOrDefault(q => q.TaskStatusID == taskStatus.TaskStatusID);

            return taskStatus;

        }

        [HttpPut]
        [Route("api/taskstatus")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public TaskStatus Put([FromBody] TaskStatus taskStatus)
        {
            TaskStatus existingTaskStatus = _db.TaskStatuses.FirstOrDefault(q => q.TaskStatusID == taskStatus.TaskStatusID);

            if (existingTaskStatus != null)
            {
                existingTaskStatus.TaskStatusName = taskStatus.TaskStatusName;
                _db.SaveChanges();

                return existingTaskStatus;
            }
            else
            {
                return null;
            }
        }


        [HttpDelete]
        [Route("api/taskstatus")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int TaskStatusID)
        {
            TaskStatus existingTaskStatus = _db.TaskStatuses.FirstOrDefault(q => q.TaskStatusID == TaskStatusID);

            if (existingTaskStatus != null)
            {
                _db.TaskStatuses.Remove(existingTaskStatus);
                _db.SaveChanges();

                return TaskStatusID;
            }
            else
            {
                return -1;
            }
        }

    }
}
