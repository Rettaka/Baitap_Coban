function isReverseString(text1, text2)
{
    if (text1.length !== text2.length) {
        return false;
    }
    let reversed = "";
    for(let i = text1.length -1; i >= 0; i--)
    {
        reversed += text1[i];
    }
    return reversed === text2;
}

let text1 = "hello";
let text2 = "olleh";

if(isReverseString(text1, text2))
    {
        console.log(text2 + " la chuoi dao nguoc cua " + text1);
    } else {
        console.log(text2 + " khong phai la chuoi dao nguoc cua " + text1);
    }