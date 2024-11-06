/*function DemChuoi(k, c)
{
    if(k == !'string' || c == !'string' || c.length != 1)
    {
        return "Vui long nhap dung chuoi va mot ky tu";
    }
    let chuoi = 0;
    for(let i = 0; i < k.length; i++)
    {
        if(k[i] === c)
        {
            chuoi ++;
        }
    }
    return chuoi;
}

console.log(DemChuoi("Hello World", "l"));
console.log(DemChuoi("What your name", "t"));
console.log(DemChuoi("12345", "45"));*/

const chuoi = 'asdcasdjnaskdnaksd';
function check_string()
{
    let a ={};
    for (let i = 0; i < chuoi.length; i++)
    {
        let check = chuoi[i];
        if(a[check])
        {
            a[check]++;
        } else {
            a[check] = 1;
        }
    }
    return a;
}

console.log(check_string(chuoi));