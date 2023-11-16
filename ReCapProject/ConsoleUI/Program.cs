using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entites.Concrete;
using Entities.Concrete;



public class Program
{
    public static void Main(string[] args)
    {
        CreateUser();
    }
    private static void CreateUser()
    {
        UserManager userManager = new UserManager(new EfUserDal());

        var result = userManager.Add(new User
        {
            FirstName = "Çetin",
            LastName = "Yılmaz",
            Email = "cetin@gmail.com",
            Password = "123456",
        });
        if (result.Success)
        {
            Console.WriteLine(result.Message);
        }
        else
        {
            Console.WriteLine(result.Message);
        }
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