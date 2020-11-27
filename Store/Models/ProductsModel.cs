using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Models
{
    public class ProductsModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("product_id")]
        public int product_id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string product_name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string product_price { get; set; }
    }
}
