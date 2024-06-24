// Get the button element
const button = document.querySelector('button');

// Create a result div
let resultdiv = document.createElement('div');
resultdiv.id = 'result';
document.getElementById('wrapper').appendChild(resultdiv);

// Add event listener to the button
button.addEventListener('click', displayCity);

function displayCity() {
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;

    let population = 0,
        literacyRate = 0,
        language = '';

    switch (city) {
        case 'Colombo':
            population = 643665;
            literacyRate = 90.81;
            language = 'Sinhala and Tamil';
            break;
        case 'Kandy':
            population = 423604;
            literacyRate = 93.08;
            language = 'Sinhala and Tamil';
            break;
        case 'Jaffna':
            population = 243785;
            literacyRate = 91.52;
            language = 'Tamil';
            break;
        case 'Trincomalee':
            population = 253232;
            literacyRate = 87.11;
            language = 'Sinhala and Tamil';
            break;
    }

    let text = `The Sri Lankan city of ${city} has a population of ${population}. The language spoken is ${language} and the literacy rate is ${literacyRate}%.`;
    console.log(text);

    document.getElementById('result').innerHTML = text;
}