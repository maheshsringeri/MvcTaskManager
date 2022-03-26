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
            if (loginViewModel.Username != null && loginViewModel.Password != null)
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
            else
            {
                return BadRequest(new { message = "Username or password is incorrect/empty." });
            }


        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] SignUpViewModel signUpViewModel)
        {
            var user = await _usersService.Register(signUpViewModel);

            if (user == null)
                return BadRequest(new { message = "Invalid Data" });

            HttpContext.User = await _applicationSignInManager.CreateUserPrincipalAsync(user);
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            Response.Headers.Add("Access-Control-Expose-Headers", "XSRF-REQUEST-TOKEN");
            Response.Headers.Add("XSRF-REQUEST-TOKEN", tokens.RequestToken);

            return Ok(user);

        }

        [HttpGet]
        [Route("api/getUserByEmail/{Email}")]
        public async Task<IActionResult> GetUserByEmail(string Email)
        {
            var user = await _usersService.GetUserByEmail(Email);

            return Ok(user);
        }

    }
}
