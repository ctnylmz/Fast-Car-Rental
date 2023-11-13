using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;



public class Program
{
    public static void Main(string[] args)
    {
        BrandAdd();
        ProductTest();


    }
    private static void Add()
    {
        CarManager carManager = new CarManager(new EfCarDal());

        carManager.Add(new Car { BrandId = 2, ColorId = 1, DailyPrice = 300, Description = "Ford Bezinli", ModelYear = 2020 });
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