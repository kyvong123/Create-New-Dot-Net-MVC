using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models.Request;
using WebApplication2.Models.Response;

namespace WebApplication2.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<ItemRes> DbItems{ get; set; }


    }
}
