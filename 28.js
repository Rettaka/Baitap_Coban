let myPromise = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve('Thanh cong sau 2 giay');
    }, 2000);
});

myPromise.then((result) => {console.log(result)});