using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class CarOperation : IEntity
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public int carId { get; set; }

    }
}
