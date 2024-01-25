using Business.Abstract;
using Business.Constants;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
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

        [SecuredOperation("Admin,Editor,Product.Add")]
        [ValidationAspect(typeof(CarValidator))]
        public IResult Add(Car car)
        {
            IResult result = BusinessRules.Run(
                           CheckIfProductCountCategoryCorrect(car.BrandId),
                           CheckIfProductName(car.Name),
                           CheckIfBrandLimitExceded()
                           );

            if (result != null)
            {
                return result;
            }

            return new ErrorResult();
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

        [ValidationAspect(typeof(CarValidator))]
        public IResult Update(Car car)
        {
            IResult result = BusinessRules.Run(
                  CheckIfProductCountCategoryCorrect(car.BrandId),
                  CheckIfProductName(car.Name),
                  CheckIfBrandLimitExceded()
                  );

            if (result != null)
            {
                return result;
            }

            _carDal.Update(car);
            return new SuccessResult(Messages.CarUpdated);
        }


        private IResult CheckIfProductCountCategoryCorrect(int brandId)
        {
            var result = _carDal.GetList(c => c.BrandId == brandId).Count;

            if (result >= 10)
            {
                return new ErrorResult("Bir Kategoride En Fazla 10 Ürün Olabilir");
            }

            return new SuccessResult();
        }

        private IResult CheckIfProductName(string Name)
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


    }
}
