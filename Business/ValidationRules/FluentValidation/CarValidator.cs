using Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.ValidationRules.FluentValidation
{
    public class CarValidator : AbstractValidator<Car>
    {
        public CarValidator()
        {
            RuleFor(c => c.Name).MinimumLength(3).WithMessage("En az 2 Harf Olmalı!");
            RuleFor(c => c.Name).NotEmpty();


        }
    }
}
