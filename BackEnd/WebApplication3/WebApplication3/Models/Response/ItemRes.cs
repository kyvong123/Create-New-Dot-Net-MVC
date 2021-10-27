using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
//using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models.Response
{
    [Table("DbItems")]
    public class ItemRes
    {
        
        [Key]
        //[Column("id")]
        public int ItemID { get; set; }
        public string ItemName { get; set; }
        public bool ItemStatus { get; set; }
        public string Description { get; set; }
        public string Note { get; set; }
    }
}
