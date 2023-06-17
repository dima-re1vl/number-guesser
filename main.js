const guess_number = Math.trunc(Math.random() * 20);
let help_text = document.querySelector('.help-text');
let point = 20;
let point_text = document.querySelector('.point-text');
const input = document.querySelector('.number');
const question = document.querySelector('.block');
const btn = document.querySelector('.btn');

point_text.innerHTML = `Очки: ${point}`

console.log(guess_number)

btn.addEventListener('click', ()=>{
    // win
    if(guess_number == input.value) {
        document.body.style.backgroundColor = '#14b51a';
        help_text.textContent = 'Вы угадали!';
        question.innerHTML = guess_number;
    }

    // low
    else if(guess_number > input.value) {
        help_text.textContent = 'Слишком мало!';
        point--;
    }

    // high
    else if (guess_number < input.value) {
        help_text.textContent = 'Слишком много!';
        point--;
    }


    point_text.innerHTML = `Очки: ${point}`
})

