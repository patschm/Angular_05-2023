using System.Collections.Generic;

namespace DataLayer.Interfaces.Entities
{
    public class ProductGroup
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        
        public string? Image { get; set; }
        public ICollection<SpecificationDefinition> Definitions { get; set; } = new HashSet<SpecificationDefinition>();
    }
}