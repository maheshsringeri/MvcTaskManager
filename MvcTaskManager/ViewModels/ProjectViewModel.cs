﻿using MvcTaskManager.Models;
namespace MvcTaskManager.ViewModels
{
    public class ProjectViewModel
    {
        public int ProjectID { get; set; }
        public string ProjectName { get; set; }
        public string DateOfStart { get; set; }
        public int? TeamSize { get; set; }
        public bool Active { get; set; }
        public string Status { get; set; }
        public int ClientLocationID { get; set; }
        public virtual ClientLocation ClientLocation { get; set; }
    }
}
