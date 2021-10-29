
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;
using WebApplication2.Models.Response;
using ZaloDotNetSDK;
using ZaloCSharpSDK;
using Newtonsoft.Json.Linq;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly long idApp = 301424487126965538;
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

        [HttpPost("postSocialAPI")]
        public async Task<IActionResult> PostChat([FromBody] ItemRes itemres)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            ZaloAppInfo appInfo = new ZaloAppInfo(301424487126965538, "JbLSQ37IGgWLAvJXYFb6", "https://developers.zalo.me/app/301424487126965538");
            ZaloAppClient appClient = new ZaloAppClient(appInfo);
            string loginUrl = appClient.getLoginUrl();
            string code = "JbLSQ37IGgWLAvJXYFb6";
            JObject token = appClient.getAccessToken(code);
            string accessToken = "0Z6xMu5KWp87FRvUXrgDDG0-j52SGezUUtpsOOfOZqHGMhDjbKRBL1D5ac_PGkrzNKECIPr-iNfwJeftbsRkMKi3rMUwOx0NJmJeFyeGYHSU0Cm9doQs7s4UpG6XBlPkAZkCLCahz7anI8XEu5JaTWjClKRGViCYLa60Ih1cxbuxOPT1s07lBrrfWnUg3EvwIMoILPb8htb_Qv96W0tASaWJg5QFAEbSRnUNU9eYnrrfHFjIc260K50rubgsCBi_F37M3Dm6aISi2Am0nZhnCoHIcY3QKgLC6pV7INIoKGfTWqw2DW";
            //Hồ sơ
            JObject profile = appClient.getProfile(accessToken, "id");
            JObject profile2 = appClient.getProfile(accessToken, "name");
            //Bạn bè
            JObject friends = appClient.getFriends(accessToken, 0, 3, "name");
            //Gửi tin nhắn 
            JObject sendMessage = appClient.sendMessage(accessToken, 1975963830901413353, "Tin nhắn này được gửi từ app", "https://developers.zalo.me/");

            return CreatedAtAction("GetThemItem", new { id = itemres.ItemID }, itemres);
        }
        [HttpGet("getwithID/{id}")]
        public IEnumerable<ItemRes> GetwithID([FromRoute] int id)
        {
            //ZaloAppInfo appInfo = new ZaloAppInfo(txt_appID.Text,)
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
