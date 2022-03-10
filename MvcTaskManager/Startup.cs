using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MvcTaskManager.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MvcTaskManager.ServiceContracts;
using MvcTaskManager.Services;
using Leave_Management_NET5;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MvcTaskManager.Mappings;

namespace MvcTaskManager
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }
        public Startup(IWebHostEnvironment env)
        {
            var builder = new ConfigurationBuilder().SetBasePath(env.ContentRootPath).AddJsonFile("appsettings.json");
            Configuration = builder.Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(
                   Configuration.GetConnectionString("DefaultConnection"),
                   b => b.MigrationsAssembly("MvcTaskManager")));

            services.AddTransient<IRoleStore<ApplicationRole>, ApplicationRoleStore>();
            services.AddTransient<UserManager<ApplicationUser>, ApplicationUserManager>();
            services.AddTransient<SignInManager<ApplicationUser>, ApplicationSignInManager>();
            services.AddTransient<RoleManager<ApplicationRole>, ApplicationRoleManager>();
            services.AddTransient<IUserStore<ApplicationUser>, ApplicationUserStore>();
            services.AddTransient<IUsersService, UsersService>();

            services.AddIdentity<ApplicationUser, ApplicationRole>()
               .AddEntityFrameworkStores<ApplicationDbContext>()
               .AddUserStore<ApplicationUserStore>()
               .AddUserManager<ApplicationUserManager>()
               .AddRoleManager<ApplicationRoleManager>()
               .AddSignInManager<ApplicationSignInManager>()
               .AddRoleStore<ApplicationRoleStore>()
               .AddDefaultTokenProviders();

            services.AddScoped<ApplicationRoleStore>();
            services.AddScoped<ApplicationUserStore>();

            services.AddAutoMapper(typeof(Maps));

            services.AddControllersWithViews();


            //Configure JWT Authentication
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = System.Text.Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                //x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                //x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            services.AddAntiforgery(options =>
            {
                options.Cookie.Name = "XSRF-Cookie-TOKEN";
                options.HeaderName = "X-XSRF-TOKEN";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, IWebHostEnvironment env,
                UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();



            //IServiceScopeFactory serviceScopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();
            //using (IServiceScope scope = serviceScopeFactory.CreateScope())
            //{
            //    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
            //    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            //    //Create Admin Role
            //    if (!(await roleManager.RoleExistsAsync("Admin")))
            //    {
            //        var role = new ApplicationRole();
            //        role.Id = "vv694538-33ff-7755-93c5-f8b7799d7a07";
            //        role.Name = "Admin";
            //        role.NormalizedName = "ADMIN";
            //        await roleManager.CreateAsync(role);
            //    }

            //    //Create Admin User
            //    if ((await userManager.FindByNameAsync("admin")) == null)
            //    {
            //        var user = new ApplicationUser();
            //        user.Id = "3b694538-33ff-4f55-93c5-f8bf732d7a07";
            //        user.UserName = "admin";
            //        user.NormalizedUserName = "ADMIN";
            //        user.Email = "admin@gmail.com";
            //        user.NormalizedEmail = "ADMIN@GMAIL.COM";
            //        var userPassword = "Admin123#";
            //        var chkUser = await userManager.CreateAsync(user, userPassword);
            //        if (chkUser.Succeeded)
            //        {
            //            await userManager.AddToRoleAsync(user, "Admin");
            //        }
            //    }

            //    //Create Employee Role
            //    if (!(await roleManager.RoleExistsAsync("Employee")))
            //    {
            //        var role = new ApplicationRole();
            //        role.Id = "xx694538-33ff-7755-93c5-f8b7799d7a07";
            //        role.Name = "Employee";
            //        role.NormalizedName = "EMPLOYEE";
            //        await roleManager.CreateAsync(role);
            //    }
            //}

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapGet("/", async context =>
            //    {
            //        await context.Response.WriteAsync("Hello World!");
            //    });
            //});

            //SeedData.Seed(userManager, roleManager);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
