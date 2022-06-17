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

        [HttpGet]
        [Route("api/clientlocations/searchbyclientlocationid/{ClientLocationID}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByClientLocationID(int ClientLocationID)
        {
            ClientLocation clientLocation = _db.ClientLocations.FirstOrDefault(q => q.ClientLocationID == ClientLocationID);

            if (clientLocation != null)
            {
                return Ok(clientLocation);
            }
            else
            {
                return NoContent();
            }

        }

        [HttpPost]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ClientLocation Post([FromBody] ClientLocation clientLocation)
        {
            _db.ClientLocations.Add(clientLocation);
            _db.SaveChanges();

            ClientLocation existingClientLocation1 = _db.ClientLocations.FirstOrDefault(q => q.ClientLocationID == clientLocation.ClientLocationID);
            return existingClientLocation1;
        }

        [HttpPut]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ClientLocation Put([FromBody] ClientLocation clientLocation)
        {
            ClientLocation existingClientLocation = _db.ClientLocations.FirstOrDefault(q => q.ClientLocationID == clientLocation.ClientLocationID);

            if (existingClientLocation != null)
            {
                existingClientLocation.ClientLocationName = clientLocation.ClientLocationName;
                _db.SaveChanges();

                return existingClientLocation;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/clientlocations")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int ClientLoactionID)
        {
            ClientLocation existingClientLocation = _db.ClientLocations.FirstOrDefault(q => q.ClientLocationID == ClientLoactionID);

            if (existingClientLocation != null)
            {
                _db.ClientLocations.Remove(existingClientLocation);
                _db.SaveChanges();

                return ClientLoactionID;
            }
            else
            {
                return -1;
            }

        }
    }
}
