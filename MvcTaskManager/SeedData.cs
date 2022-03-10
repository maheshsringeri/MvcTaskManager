using MvcTaskManager.Identity;
using Microsoft.AspNetCore.Identity;

namespace Leave_Management_NET5
{
    public static class SeedData
    {
        public static void Seed(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        private static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            if (userManager.FindByNameAsync("admin").Result == null)
            {
                var user = new ApplicationUser
                {
                    Id = "3b694538-33ff-4f55-93c5-f8bf732d7a07",
                    UserName = "admin",
                    NormalizedUserName = "ADMIN",
                    Email = "admin@gmail.com",
                    NormalizedEmail = "ADMIN@GMAIL.COM"
                };

                var result = userManager.CreateAsync(user, "Admin123#").Result;
                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Admin").Wait();
                }
            }
            if (userManager.FindByNameAsync("employee1").Result == null)
            {
                var user = new ApplicationUser
                {
                    Id = "eee94538-33ff-4f55-93c5-f8bf732d7a07",
                    UserName = "employee1",
                    NormalizedUserName = "EMPLOYEE1",
                    Email = "employee1@gmail.com",
                    NormalizedEmail = "EMPLOYEE1@GMAIL.COM"
                };

                var result = userManager.CreateAsync(user, "Admin123#").Result;
                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Employee").Wait();
                }
            }
        }

        private static void SeedRoles(RoleManager<ApplicationRole> roleManager)
        {
            if (!roleManager.RoleExistsAsync("Admin").Result)
            {
                var role = new ApplicationRole()
                {
                    Id = "vv694538-33ff-7755-93c5-f8b7799d7a07",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                };

                var result = roleManager.CreateAsync(role).Result;
            }

            if (!roleManager.RoleExistsAsync("Employee").Result)
            {
                var role = new ApplicationRole()
                {
                    Id = "xx694538-33ff-7755-93c5-f8b7799d7a07",
                    Name = "Employee",
                    NormalizedName = "EMPLOYEE"

                };
                var result = roleManager.CreateAsync(role).Result;

            }
        }
    }
}
