using System.Collections.Generic;
using System.Linq;
using DataLayer.Interfaces;
using DataLayer.Interfaces.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DataLayer.WebApi.Controllers
{
    [Route("brands")]
    public class BrandController : Controller
    {
        private IRepository repository;

        public BrandController(IRepository rep)
        {
            repository = rep;
        }

        [HttpGet]
        public List<Brand> Get(int page, int nr)
        {
            return repository.Brands().ToList();
        }
    }
}