using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entites.Concrete;
using Entities.Concrete;



public class Program
{
    public static void Main(string[] args)
    {
        CreateRental();
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

    private static void CreateRental()
    {
        RentalManager rentalManager = new RentalManager(new EfRentalDal());

        var result = rentalManager.Add(new Rental
        {
            CarId = 2,
            CustomerId = 2,
            RentDate = DateTime.Now,
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