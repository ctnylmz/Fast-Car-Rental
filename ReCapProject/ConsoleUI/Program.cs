using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;

CarManager carManager = new CarManager(new EfCarDal());

carManager.Add(new Car { BrandId = 2, ColorId = 1, DailyPrice = 300, Description = "Toggg 2023", ModelYear = 2023 });


