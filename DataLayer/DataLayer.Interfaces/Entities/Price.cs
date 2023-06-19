namespace DataLayer.Interfaces.Entities
{
    public class Price
    {
        public int ProductID { get; set; }
        public double BasePrice { get; set; }
        public string? ShopName { get; set; }
    }
}