let Person =
{
    name: "Bui Thien Dat",
    age: 22,
    
    greet:function()
    {
        console.log(this.name + ' ' + this.age);
    }
};

Person.greet();