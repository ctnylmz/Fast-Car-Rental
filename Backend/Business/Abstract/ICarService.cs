using Core.Utilities.Results;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICarService
    {
        IResult Add(Car car);
        IResult Update(Car car);
        IResult Delete(Car car);
        IDataResult<Car> GetById(int id);
        IDataResult<List<Car>> GetList();
        IDataResult<List<CarDetailDto>> GetAllByCategoryId(int id);
        IDataResult<List<CarDetailDto>> GetAllByColorId(int id);
        IDataResult<List<CarDetailDto>> getCarsByColorAndBrand(int brandId, int colorId);
        IDataResult<List<CarDetailDto>> GetCarDetails();
        IDataResult<List<CarDetailDto>> GetNullImage();
        IDataResult<List<CarDetailDto>> GetCarId(int id);
        IDataResult<List<CarOperation>> GetCarOperation(string Email);
        IResult AddDefaultCars(CarOperation carOperation);


    }
}
