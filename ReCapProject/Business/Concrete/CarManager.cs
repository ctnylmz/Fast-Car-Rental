using Business.Abstract;
using DataAccess.Abstract;
using Entites.DTOs;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;

        public CarManager(ICarDal carDal)
        {
            _carDal = carDal;
        }

        public void Add(Car car)
        {
            if (car.Description.Length >= 5 && car.DailyPrice > 10)
            {
                _carDal.Add(car);
                Console.WriteLine("Araç Başarıyla Yüklendi ! ");
            }
            else
            {
                Console.WriteLine("Araç Yüklenirken Hata ! Araç Adı 5 Karakterden Az ve Günlük Ücreti 10 Tl Olamaz...");
            }
        }

        public List<Car> GetAll()
        {
            return _carDal.GetAll();
        }

        public List<CarDetailDto> GetCarDetails()
        {
            return _carDal.GetCarDetails();
        }
    }
}
