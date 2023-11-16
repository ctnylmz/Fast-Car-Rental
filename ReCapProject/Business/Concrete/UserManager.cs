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
    public class UserManager : IUserService
    {
        IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public IResult Add(User user)
        {
            if (user.Password.Length <= 5)
            {
                return new ErrorResult(Messages.UserPasswordInvalid);

            }
            else
            {
                _userDal.Add(user);

                return new SuccessResult(Messages.UserAdded);
            }
          
        }

        public IDataResult<List<User>> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
