using System.Collections.Generic;

namespace DataLayer.Interfaces.Entities
{
    public class Product
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public Brand? Brand { get; set; }
        public ProductGroup? ProductGroup { get; set; }
        public decimal Price { get; set; }
        public decimal Score { get; set; }
        public string? Image { get; set; }
        public ICollection<Specification> Specifications { get; set; } = new HashSet<Specification>();
    }
}