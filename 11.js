function reverse(text)
{
    let reversed = "";
    for(let i = text.length - 1; i >= 0; i--)
        {
            reversed += text[i];
        }
        console.log(reversed);
}

reverse("Xin chao cac ban");