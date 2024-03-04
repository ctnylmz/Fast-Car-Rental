﻿using Core.DataAccess.Concrete.EntityFramework;
using Core.Entities.Concrete;
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
    public class EfCarOperationDal : EfEntityRepositoryBase<CarOperation, FastCarRentalContext>, ICarOperationDal
    {
    }
}
