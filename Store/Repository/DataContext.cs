using Microsoft.EntityFrameworkCore;
using Store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Store.Repository
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }
        public DbSet<UserModel> User { get; set; }
        public DbSet<ProductsModel> Products { get; set; }
        public DbSet<OrderModel> Orders { get; set; }
    }
}
