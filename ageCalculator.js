function ageCalculator(name, yearOfBirth, currentYear)
{
  let currentAge = currentYear - yearOfBirth;
  let result = name + " is "+ currentAge+ " years old."
  return result;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));