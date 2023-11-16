using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class RentalManager : IRentalService
    {
        IRentalDal _rentalDal;

        public RentalManager(IRentalDal rentalDal)
        {
            _rentalDal = rentalDal;
        }

        public IResult Add(Rental rental)
        {
            var isRented = _rentalDal.Get(r => r.ReturnDate == null && r.CarId == rental.CarId);

            if (isRented != null)
            {
                return new ErrorResult(Messages.RentalInvalid);
            }
            
            _rentalDal.Add(rental);

            return new SuccessResult(Messages.RentalAdded);
        }

        public IDataResult<Rental> Get(int id)
        {
            throw new NotImplementedException();
        }

        public IDataResult<List<Rental>> GetAll()
        {
            return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll());
        }
    }
}
