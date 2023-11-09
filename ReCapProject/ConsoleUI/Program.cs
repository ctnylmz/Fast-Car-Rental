using Business.Concrete;
using DataAccess.Concrete;

CarManager carManager = new CarManager(new InMemoryCarDal());

foreach (var car in carManager.GetAll())
{
    Console.WriteLine(car.Decription + " " + car.DailyPrice);
}
