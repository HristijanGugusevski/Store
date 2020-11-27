using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class OrderModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long order_id { get; set; }
        [Required]
        [ForeignKey("product_id")]
        public virtual ProductsModel product_id_fk { get; set; }
        [Required]
        [ForeignKey("id_user")]
        public virtual UserModel user_id_fk { get; set; }
        [Required]
        public bool placed_order { get; set; }
    }
}
