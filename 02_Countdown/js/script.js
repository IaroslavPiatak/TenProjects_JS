const items = document.querySelectorAll(".countdown_item > h4");
const final = document.querySelector('.countdown');
console.log(final);
const countDownTime = new Date(2024, 1, 20, 10 ,17 ).getTime();


function getCountDown()
{
    const nowTime = new Date().getTime();
    const distance = countDownTime - nowTime;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute =  60 * 1000;

    let days = Math.floor(distance/oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes,seconds];
    items.forEach(function(item, index)
    {
        item.textContent = (values[index]) 
    });

    if(distance < 0)
    {
        countDown_interval = clearInterval(getCountDown);
        final.innerHTML = '<h1 class ="expired">Время вышло</h1>';
    }

}
let countDown_interval = setInterval(getCountDown, 1000);
getCountDown();


