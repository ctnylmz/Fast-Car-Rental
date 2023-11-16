﻿using Core.Utilities.Results;
using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface ICustomerService
    {
        IResult Add(Customer customer);

        IDataResult<List<Customer>> GetAll();

        IDataResult<Customer> GetById(int id);
    }
}
