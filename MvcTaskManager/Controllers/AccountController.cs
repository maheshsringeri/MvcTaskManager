using Microsoft.AspNetCore.Mvc;
using MvcTaskManager.ServiceContracts;
using MvcTaskManager.ViewModels;
using System.Threading.Tasks;
using MvcTaskManager.Identity;
using Microsoft.AspNetCore.Antiforgery;


namespace MvcTaskManager.Controllers
{
    [ApiController]
    public class AccountController : Controller
    {
        private IUsersService _usersService;
        private readonly ApplicationSignInManager _applicationSignInManager;
        private readonly IAntiforgery _antiforgery;

        public AccountController(IUsersService usersService, ApplicationSignInManager applicationSignInManager, IAntiforgery antiforgery)
        {
            this._usersService = usersService;
            this._applicationSignInManager = applicationSignInManager;
            this._antiforgery = antiforgery;
        }


        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginViewModel loginViewModel)
        {
            var user = await _usersService.Authenticate(loginViewModel);

            if (user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            HttpContext.User = await _applicationSignInManager.CreateUserPrincipalAsync(user);
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            Response.Headers.Add("Access-Control-Expose-Headers", "XSRF-REQUEST-TOKEN");
            Response.Headers.Add("XSRF-REQUEST-TOKEN", tokens.RequestToken);


            return Ok(user);
        }
    }
}
