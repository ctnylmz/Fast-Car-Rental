using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entites.Concrete
{
    public class Customers : IEntity
    {
        public int Id { get; set; }
        public Users UserId { get; set; }
        public string CompanyName { get; set; }
    }
}
