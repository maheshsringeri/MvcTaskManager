using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.ViewModels;
using System.IO;
using System.Net.Http;
using System.Text;

namespace MvcTaskManager.Controllers
{
    public class RouterLoggerController : Controller
    {

        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IHttpContextAccessor _accessor;

        public RouterLoggerController(IHostingEnvironment hostingEnvironment, IHttpContextAccessor accessor)
        {
            this._hostingEnvironment = hostingEnvironment;
            this._accessor = accessor;
        }


        [HttpPost]
        [Route("api/routerlogger")]
        public IActionResult Index([FromBody] RouterLogger logger)
        {
            string logMessage = logger.log + "\n";
            //using (StreamReader streamReader = new StreamReader(Request.Body, Encoding.ASCII))
            //{
            //    logMessage = streamReader.ReadToEnd() + "\n";
            //}
            //string filePath = this._hostingEnvironment.ContentRootPath + "\\RouterLogger.txt";
            //System.IO.File.AppendAllText(filePath, logMessage);


            string filePath = this._hostingEnvironment.ContentRootPath + "\\RouterLogger.txt";
            System.IO.File.AppendAllText(filePath, logMessage);

            return Ok();
        }

    }
}
