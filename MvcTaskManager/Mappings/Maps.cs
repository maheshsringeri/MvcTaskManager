using AutoMapper;
using MvcTaskManager.Models;
using MvcTaskManager.ViewModels;

namespace MvcTaskManager.Mappings
{
    public class Maps : Profile
    {
        public Maps()
        {
            CreateMap<Project, ProjectViewModel>().ReverseMap();
        }
    }
}
