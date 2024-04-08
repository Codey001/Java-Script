const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>Your BMI is : ${bmi}</span>`;
        let msg = "";
        if(bmi<18.6) msg = 'Under Weight';
        else if(bmi>=18.6 && bmi<24.9) msg = 'Normal Range';
        else if(bmi>=24.9 ) msg = 'Overweight';
        console.log(msg)

        message.innerHTML = `<span>Your BMI comes under ${msg}</span>`;
    }
})