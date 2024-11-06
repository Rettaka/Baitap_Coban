function NguyenDuong(n)
{
    if(!Number.isInteger(n) || n <=0)
    {
        return "Vui long nhap mot so nguyen duong";
    };
    let sum = 0;
    for(let i = 0; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}

console.log(NguyenDuong(5));
console.log(NguyenDuong(-5));
console.log(NguyenDuong(20));
console.log(NguyenDuong(0));
console.log(NguyenDuong(15));
console.log(NguyenDuong(5.5));