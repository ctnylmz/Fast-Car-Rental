using Business.Abstract;
using Business.Constants;
using Core.Entities.Concrete;
using Core.Utilities.Results;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Repository;
using Entities.Concrete;
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
        IUserOperationClaimDal _useroperationClaimDal;
        IOperationClaimDal _operationClaimDal;

        public UserManager(IUserDal userDal, IUserOperationClaimDal useroperationClaimDal, IOperationClaimDal operationClaimDal)
        {
            _userDal = userDal;
            _useroperationClaimDal = useroperationClaimDal;
            _operationClaimDal = operationClaimDal;
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userDal.GetClaims(user);
        }

        public void Add(User user)
        {
            _userDal.Add(user);
        }

        public User GetByMail(string email)
        {
            return _userDal.Get(u => u.Email == email);
        }

        public IDataResult<User> GetById(int id)
        {
            return new SuccessDataResult<User>(_userDal.Get(u => u.Id == id));
        }
        public IDataResult<User> GetByEmail(string email)
        {
            return new SuccessDataResult<User>(_userDal.Get(u => u.Email == email));

        }


        public IDataResult<OperationClaim> GetByOperationClaimIName(int id)
        {
            var result = (_useroperationClaimDal.Get(u => u.UserId == id));

            var role = (_operationClaimDal.Get(u => u.Id == result.OperationClaimId));


            return new SuccessDataResult<OperationClaim>(role);
        }

      
    }
}
