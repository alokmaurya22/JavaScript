const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (events) {
    events.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)

    // console.log(height)
    // console.log(weight)

    let flag = 1;
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height : ${height}`;
        flag = 0;
    } if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight : ${weight}`;
        flag = 0;
    } if (flag === 1) {
        var bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //results.innerHTML = `${bmi}`;
        results.innerHTML = `<span>${bmi}</span>`;
        //console.log(results.id)
    }

    //color Set
    let color = 'black';
    if (flag === 0) {
        color = "Red"
    } else {
        if (bmi <= 18.6) {
            color = "Orange"
        }
        if (18.6 > bmi > 24.9) {
            color = "green"
        } if (bmi > 24.9) {
            color = "red"
        }
    }

    const res = document.querySelector('#results')
    res.style.color = color;

});