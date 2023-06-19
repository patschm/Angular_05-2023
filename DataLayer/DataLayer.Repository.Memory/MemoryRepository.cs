using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using DataLayer.Interfaces;
using DataLayer.Interfaces.Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace DataLayer.Repository.Memory
{
    public class MemoryRepository : IRepository
    {
        private static List<Product>? products;
        private static List<ProductGroup>? productGroups;
        private static List<Review>? reviews;
        private Random rnd = new Random((int)DateTime.Now.Ticks);

        private static object syncLock = new object();
        private IWebHostEnvironment env;

        public MemoryRepository(IWebHostEnvironment env)
        {
            this.env = env;
        }

        private List<Review> _Reviews 
        { 
            get
            {
                if (reviews == null)
                {
                    reviews = new List<Review>();
                    foreach (var product in _Products)
                    {
                        reviews.AddRange(GenerateReviews(product.ID));
                    }
                }
                return reviews;
            }
        }
        private List<Product> _Products
        {
            get
            {
                if (products == null)
                {
                    lock(syncLock)
                    {
                        using(FileStream fs = new FileStream(env.ContentRootPath + "\\Data\\products.json", FileMode.Open, FileAccess.Read))
                        {
                            JsonSerializer ser = new JsonSerializer();
                            using (JsonTextReader rdr = new JsonTextReader(new StreamReader(fs)))
                            {
                                products = ser.Deserialize(rdr, typeof(List<Product>)) as List<Product>;
                            }
                        }
                        foreach (var product in products!)
                        {
                            if (product.Image == null) continue;
                            product.Image = product.Image.ToLower();
                        }
                    }
                }
                return products;
            }
        }
        private List<ProductGroup> _ProductGroups
        {
            get
            {
                if (productGroups == null)
                {
                    lock (syncLock)
                    {
                        using (FileStream fs = new FileStream(env.ContentRootPath + "\\Data\\productgroups.json", FileMode.Open, FileAccess.Read))
                        {
                            JsonSerializer ser = new JsonSerializer();
                            using (JsonTextReader rdr = new JsonTextReader(new StreamReader(fs)))
                            {
                                productGroups = ser.Deserialize(rdr, typeof(List<ProductGroup>)) as List<ProductGroup>;
                            }
                        }
                        foreach (var product in productGroups!)
                        {
                            product.Image = product?.Image?.ToLower();
                        }
                    }
                }
                return productGroups;
            }
        }

        public IQueryable<Brand> Brands()
        {
            return _Products.Select(p=>p.Brand).Distinct()!.AsQueryable<Brand>();
        }

        public IQueryable<Price> Prices(int productID)
        {
            string[] shops = {"ACME Inc", "Media Shop", "Buy Me", "All or Nothing", "Teleshop"};
            
            var prices = new List<Price>();
            foreach(var s in shops)
                {
                    Price p = new Price();
                    p.ProductID = productID;
                    p.BasePrice = rnd.Next(25, 1000);
                    p.ShopName = s;
                    prices.Add(p);
                }
            return prices.AsQueryable();
        }

        public IQueryable<ProductGroup> ProductGroups()
        {
            return _ProductGroups.AsQueryable();
        }

        public IQueryable<Product> Products()
        {
            return _Products.AsQueryable();
        }

        public void AddReview(Review review)
        {
            if (reviews != null) _Reviews.Add(review);
        }
        public IQueryable<Review> Reviews(int productID)
        {
           return _Reviews.Where(r=>r.ProductID == productID).AsQueryable();
        }

        private string RandomText()
        {
            StringBuilder bld = new StringBuilder();
            
            int count = rnd.Next(1, 5);
            for(int i = 0; i <= count;i++ )
            {
                bld.Append("meh ");
            }

            return bld.ToString();
        }
        public IQueryable<Specification> Specifications(int productID)
        {
            var pp =  Products().FirstOrDefault(p=>p.ID == productID);
            return pp!.Specifications.AsQueryable<Specification>();
        }
        private List<Review> GenerateReviews(int productID)
        {
            string[] writers = {"anonymous", "Kees Billings", "Courtney Johnson", "Paul Hensom", "Joan Horn"};
            
            var revs = new List<Review>();
            foreach(var s in writers.Take(rnd.Next(0, 3)))
                {
                    var p = new Review();
                    p.ProductID = productID;
                    p.Author = s;
                    p.Text = "This product is " + RandomText();
                    p.Score = rnd.Next(1,5);
                    revs.Add(p);
                }
            return revs;
        }
    }
}
