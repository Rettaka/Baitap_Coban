let user =
{
    firstName: 'Long',
    lastName: 'Than',
    year: 2000,

    getFullName: function()
    {
        return this.firstName + " " + this.lastName;
    },

    getAge: function(currentYear)
    {
        return currentYear - this.year;
    }
};

let currentYear = 2027;

console.log(user.getFullName());
console.log(user.getAge(currentYear));