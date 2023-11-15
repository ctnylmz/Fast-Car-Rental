using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;



public class Program
{
    public static void Main(string[] args)
    {

        Add();


    }
    private static void Add()
    {
        CarManager carManager = new CarManager(new EfCarDal());

        carManager.Add(new Car { BrandId = 2, ColorId = 2, DailyPrice = 2000, Description = "Clio Benzin Manuel", ModelYear = 2015 });
    }

    private static void BrandAdd()
    {
        BrandManager brandManager = new BrandManager(new EfBrandDal());

        brandManager.Add(new Brand { Name = "Mersedes" });
    }

    private static void ProductTest()
    {
        CarManager carManager = new CarManager(new EfCarDal());

        foreach (var car in carManager.GetCarDetails())
        {
            Console.WriteLine(car.CarName + "/" + car.BrandName);
        }

    }
}