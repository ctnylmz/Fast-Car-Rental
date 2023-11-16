using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;



public class Program
{
    public static void Main(string[] args)
    {
        CarGetAll();
    }
    private static void Add()
    {
        CarManager carManager = new CarManager(new EfCarDal());

        carManager.Add(new Car { BrandId = 3, ColorId = 1, DailyPrice = 4500, Description = "Ford Tourneo Courier 1.5 Benzinli", ModelYear = 2023 });
    }

    private static void BrandAdd()
    {
        BrandManager brandManager = new BrandManager(new EfBrandDal());

        brandManager.Add(new Brand { Name = "Ford" });
    }

    private static void CarGetAll()
    {
        CarManager carManager = new CarManager(new EfCarDal());

        var result = carManager.GetCarDetails();

        if (result.Success)
        {
            foreach (var item in result.Data)
            {
                Console.WriteLine(item.CarName + " - " + item.BrandName);
            }
        }
        else
        {
            Console.WriteLine("Hata");

        }


    }
}