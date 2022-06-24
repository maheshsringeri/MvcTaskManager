using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MvcTaskManager.Models
{
    public class TaskPriority
    {
        [Key]
        public int TaskPriorityID { get; set; }
        public string TaskPriorityName { get; set; }

    }
}
