using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MvcTaskManager.Identity;
namespace MvcTaskManager.Models
{
    public class Skill
    {
        [Key]
        public int SkillID { get; set; }
        public string SkillName { get; set; }
        public string SkillLevel { get; set; }

        public string ID { get; set; }

        [ForeignKey("ID")]
        public virtual ApplicationUser ApplicationUser { get; set; }

    }
}
