const colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const button = document.getElementById('btn');

button.addEventListener('click', () =>
{
    let Hex = getHex();
    document.body.style.backgroundColor = Hex;
    document.querySelector('.color').textContent = Hex;
})


function getHex()
{
    let Hex = '#';
    for(let i = 0; i < 6; i++)
    {
        Hex += colors[Math.floor(Math.random() * colors.length)];
    }

    return Hex;
}