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

    private static void CreateCustomer()
    {
        CustomerManager customerManager = new CustomerManager(new EfCustomerDal());

        customerManager.Add(new Customer
        {
            UserId = 1,
            CompanyName = "Kiraz Soft",
        });
    }

    private static void CarAdd()
    {
        CarManager carManager = new CarManager(new EfCarDal());


        var result = carManager.Add(new Car
        {
            BrandId = 1,
            ColorId = 1,
            ModelYear = 2018,
            DailyPrice = 2700,
            Description = "Audi A4 , Otomatik , Dizel"
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