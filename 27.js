function daonguoc(k)
{
    return k.split('').reverse().join('');
}

let chuoi = "Hello Wold";

let print = daonguoc(chuoi);

console.log(print);