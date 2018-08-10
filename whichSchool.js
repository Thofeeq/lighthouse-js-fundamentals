function whichSchool(age) {
var elementary = "Elementary School";
var secondary = "Secondary School";
var lighthouse = "Lighthouse Labs";
if(age < 13)
{
	return elementary;
}
else if (age >= 13 && age <= 18) {
	return secondary;
} else{
	return lighthouse;
}

}
