const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
    .then(response => response.text())
    .then(response => JSON.parse(response))
    .then(catResponseParsed => displayCatInfo(catResponseParsed))

function displayCatInfo(cats) {
    let total = 0;
    let male = 0;
    let lengthCats = cats.length;
    cats.forEach((cat, index) => {
        motherInfo += (index === lengthCats - 1) ? " and " + cat.name + "." : " " + cat.name + ",";
        cat.kittens.forEach(kitten => {
            if (kitten.gender === "m")
                male++;
        })
        total += cat.kittens.length;
    });
    kittenInfo = "The total number of kittens is " + total + ", " + male + " are males and " + (total - male) + " are females."
    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
