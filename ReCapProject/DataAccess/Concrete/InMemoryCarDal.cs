using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete
{
    public class InMemoryCarDal : ICarDal
    {

        List<Car> _cars;

        public InMemoryCarDal()
        {
            _cars = new List<Car>
            {
                new Car{Id=1,BrandId=1,ColorId=1,ModelYear=2016,DailyPrice=1500,Decription="Benzin Manuel"},
                new Car{Id=2,BrandId=1,ColorId=1,ModelYear=2013,DailyPrice=1000,Decription="Dizel Manuel"},
                new Car{Id=3,BrandId=1,ColorId=1,ModelYear=2010,DailyPrice=750,Decription="Dizel Manuel"},
                new Car{Id=4,BrandId=1,ColorId=1,ModelYear=2023,DailyPrice=3000,Decription="Benzin Otomatik"},
                new Car{Id=5,BrandId=1,ColorId=1,ModelYear=2020,DailyPrice=2000,Decription="Benzin Otomatik"},
            };
        }


        public void Add(Car car)
        {
            _cars.Add(car);
        }

        public void Delete(Car car)
        {
            Car carDelete = _cars.Find(x => x.Id == car.Id);

            _cars.Remove(carDelete);
        }

        public List<Car> GetAll()
        {
            return _cars;
        }

        public void GetById(int Id)
        {
            Car car = _cars.Find(x => x.Id == Id);
            Console.WriteLine(car.Decription);

        }

        public void Update(Car car)
        {
            Car carToUpdate = _cars.Find(x => x.Id == car.Id);
            
            carToUpdate.BrandId = car.BrandId;
            carToUpdate.ColorId = car.ColorId;
            carToUpdate.ModelYear = car.ModelYear;
            carToUpdate.DailyPrice = car.DailyPrice;
            carToUpdate.Decription = car.Decription;

        }
    }
}
