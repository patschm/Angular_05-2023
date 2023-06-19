using System.Linq;
using DataLayer.Interfaces.Entities;

namespace DataLayer.Interfaces
{
    public interface IRepository
    {
        IQueryable<Product> Products();
        IQueryable<ProductGroup> ProductGroups();
        IQueryable<Brand> Brands();
        IQueryable<Price> Prices(int productID);
        IQueryable<Review> Reviews(int productID);
        void AddReview(Review review);
        IQueryable<Specification> Specifications(int productID);
    }
}
