
const button = document.getElementById('btn');
let count1 = 0;
let count2 = 0;

button.addEventListener('click', function () {
    let image1 = document.getElementById('dice1');
    let image2 = document.getElementById('dice2');

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    image1.setAttribute('src', 'image ' + randomNumber1 + '.png');
    image2.setAttribute('src', 'image ' + randomNumber2 + '.png');

    let h = document.getElementById('heading');
    if (randomNumber1 === randomNumber2) {
        h.innerText = 'drow!';
    } else if (randomNumber1 > randomNumber2) {
        h.innerText = 'player 1 win ' ;
        count1++;
    } else {
        h.innerText = 'player 2 win';
        count2++;
    }

    let head = document.getElementById('p1');
    let head2 = document.getElementById('p2');

    head.innerText =  count1;
    head2.innerText = count2;
});




