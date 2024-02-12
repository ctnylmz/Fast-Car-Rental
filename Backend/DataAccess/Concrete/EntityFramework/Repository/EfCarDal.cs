﻿using Core.DataAccess.Concrete.EntityFramework;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Context;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Repository
{
    public class EfCarDal : EfEntityRepositoryBase<Car, FastCarRentalContext>, ICarDal
    {

    }
}
