using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class UserModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("id_user")]
        public int id_user { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string user_name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string user_password { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string user_address { get; set; }
    }
}
