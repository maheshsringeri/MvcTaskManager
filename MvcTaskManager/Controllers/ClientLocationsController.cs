using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MvcTaskManager.Models;
using System.Linq;
using System.Collections.Generic;

namespace MvcTaskManager.Controllers
{
    public class ClientLocationsController : Controller
    {
        private ApplicationDbContext _db;

        public ClientLocationsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Get()
        {
            List<ClientLocation> clientLocation = _db.ClientLocations.ToList();
            return Ok(clientLocation);
        }
    }
}
