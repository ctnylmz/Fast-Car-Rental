using Business.Abstract;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using DataAccess.Abstract;
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

        IBrandService _brandService;

        public CarManager(ICarDal carDal, IBrandService brandService)
        {
            _carDal = carDal;
            _brandService = brandService;
        }


        public IResult Add(Car car)
        {
            _carDal.Add(car);
            return new SuccessResult(Messages.CarAdded);
        }

        public IResult Delete(Car car)
        {

            _carDal.Delete(car);
            return new SuccessResult(Messages.CarDeleted);
        }

        public IDataResult<Car> GetById(int Id)
        {
            return new SuccessDataResult<Car>(_carDal.Get(c => c.Id == Id), Messages.CarListed);
        }

        public IDataResult<List<Car>> GetList()
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetList().ToList(), Messages.CarsListed);
        }


        public IResult Update(Car car)
        {

            _carDal.Update(car);
            return new SuccessResult(Messages.CarUpdated);
        }


        private IResult CheckIfCarCountCategoryCorrect(int brandId)
        {
            var result = _carDal.GetList(c => c.BrandId == brandId).Count;

            if (result >= 3)
            {
                return new ErrorResult("Bir Kategoride En Fazla 3 Ürün Olabilir");
            }

            return new SuccessResult();
        }

        private IResult CheckIfCarName(string Name)
        {
            var result = _carDal.GetList(c => c.Name == Name).Any();

            if (result)
            {
                return new ErrorResult(Messages.CarNameAlreadyExists);
            }

            return new SuccessResult();
        }

        private IResult CheckIfBrandLimitExceded()
        {
            var result = _brandService.GetList();

            if (result.Data.Count > 15)
            {
                return new ErrorResult("eger mevcut kategori 15'i geçtiyse sisteme yeni ürün eklenemez");
            }

            return new SuccessResult();
        }

        public DataResult<List<Car>> GetAllByCategoryId(int id)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetList(c => c.BrandId == id).ToList());
        }
    }
}
