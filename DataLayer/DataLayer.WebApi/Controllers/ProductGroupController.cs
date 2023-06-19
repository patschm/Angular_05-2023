using System.Collections.Generic;
using System.Linq;
using DataLayer.Interfaces;
using DataLayer.Interfaces.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DataLayer.WebApi.Controllers
{
    [Route("productgroups")]
    public class ProductGroupController : Controller
    {
        IRepository repository;

        public ProductGroupController(IRepository rep)
        {
            repository = rep;
        }   
        [HttpGet]    
        public List<ProductGroup> Get()
        {
            return repository.ProductGroups().Where(pg=>pg.ID != 2 && pg.ID != 6).ToList();
        }
        [HttpGet("{pgId}")]
        public ProductGroup? GetByID(int pgId)
        {
            return repository.ProductGroups().FirstOrDefault(p=>p.ID == pgId);
        }
    }
}