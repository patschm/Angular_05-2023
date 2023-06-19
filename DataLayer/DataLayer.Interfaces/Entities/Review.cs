namespace DataLayer.Interfaces.Entities
{
    public class Review
    {
        public int ProductID {get; set; }
        public string? Author { get; set; }
        public string? Text { get; set; }
        public int Score { get; set; }
    }
}