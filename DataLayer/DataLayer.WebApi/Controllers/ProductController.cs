
using System.Collections.Generic;
using System.Linq;
using DataLayer.Interfaces;
using DataLayer.Interfaces.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DataLayer.WebApi.Controllers
{
    [Route("products")]
    public class ProductController : Controller
    {
        IRepository repository;

        public ProductController(IRepository rep)
        {
            repository = rep;
        }

        [HttpPost("reviews")]
        public void PostReview([FromBody]Review review)
        {
            repository.AddReview(review);   
        }
        [HttpGet("reviews/{id}")]
        public List<Review> GetReviews(int id = 0)
        {
            return repository.Reviews(id).ToList();
           
        }
        [HttpGet("specifications/{id}")]
        public List<Specification> GetSpecifications(int id = 0)
        {
            return repository.Specifications(id).ToList();
        }
        [HttpGet("prices/{id}")]
        public List<Price> GetPrices(int id = 0)
        {
            return repository.Prices(id).ToList();
        }
        [HttpGet("{id}")]
        public Product? Get(int id = 0)
        {
            return repository.Products().FirstOrDefault(p=>p.ID == id);
        }

        [HttpGet("all/{pg?}/{page?}/{nr?}")]
        public List<Product> GetAll(int pg = 0, int page = 0, int nr = 10)
        {
            if (pg == 0)
                return repository.Products().Skip(page * nr).Take(nr).ToList();
            else
                return repository.Products().Where(p => p.ProductGroup!.ID == pg).Skip(page * nr).Take(nr).ToList();
        }
        [HttpGet("productcount/{pg?}")]
        public int Count(int pg = 0)
        {
            if (pg == 0)
                return repository.Products().Count();
            else
                return repository.Products().Where(p => p.ProductGroup!.ID == pg).Count();
        }
    }
}