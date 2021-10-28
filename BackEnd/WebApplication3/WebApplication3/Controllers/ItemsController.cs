
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;
using WebApplication2.Models.Response;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;
        public ItemsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public IEnumerable<ItemRes> GetItems()
        {
            return _context.DbItems;
        }


        [HttpPost]
        public async Task<IActionResult> PostItem([FromBody] ItemRes itemres)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //var item_temp = new ItemRes();
            //item_temp.ItemID = itemres.ItemID;
            //item_temp.ItemName = itemres.ItemName;
            //item_temp.Description = itemres.Description;
            //item_temp.Note = itemres.Note;
            //item_temp.ItemStatus = itemres.ItemStatus;
            _context.DbItems.Add(itemres);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetThemItem", new { id = itemres.ItemID }, itemres);
        }

        [HttpGet("getwithID/{id}")]
        public IEnumerable<ItemRes> GetwithID([FromRoute] int id)
        {
            var item_get = _context.DbItems.Where(x => x.ItemID == id).Select(
                x => new ItemRes()
                {
                    ItemID = x.ItemID,
                    ItemName = x.ItemName,
                    ItemStatus = x.ItemStatus,
                    Description = x.Description,
                    Note = x.Note
                }).ToList();
            return item_get;
        }

        //[HttpPost]
        //public IActionResult PostItem([FromBody] ItemRes itemres)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    //var item_temp = new ItemRes();
        //    //item_temp.ItemID = itemres.ItemID;
        //    //item_temp.ItemName = itemres.ItemName;
        //    //item_temp.Description = itemres.Description;
        //    //item_temp.Note = itemres.Note;
        //    //item_temp.ItemStatus = itemres.ItemStatus;
        //    _context.DbItems.Add(itemres);
        //    _context.SaveChangesAsync();
        //    return CreatedAtAction("GetThemItem", new { id = item_temp.ItemID }, item_temp);
        //}

        

        private bool ItemExists(int id)
        {
            return _context.DbItems.Any(e => e.ItemID == id);
        }
    }

    
}
