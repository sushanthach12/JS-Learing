console.log('Quiz');


let frutiBtn = document.getElementById('fruitBtn');
let vegBtn = document.getElementById('vegBtn');

frutiBtn.addEventListener('click', fruitHandler);


function fruitHandler() {
    console.log('CLicked fruit');
    // let fname = require('./fruit.json');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'JSON/fruit.json', true);
    

    xhr.onload = function () {
        if (this.status === 200) { // https status code 200 : response code 200 => OK

            
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let flist = document.getElementById('fList');
            str = "";
            for (key in obj) {
                let fruit = obj[key].value;
                str += `<h1>Fruit list</h1>
                            <li>${obj[key].name}</li>
                    `;
            }


            flist.innerHTML = str;
            console.log(this.responseText);

        }
    }
    xhr.send();
    console.log('FEtching Fruit')
}
vegBtn.addEventListener('click', vegHandler);

function vegHandler() {
    console.log('CLicked Vegetable');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetable.json', true);

    xhr.onload = function () {
        let obj2 = JSON.parse(this.responseText);
        console.log(obj2);
        let vlist = document.getElementById('vList');
        str2 = "";
        for (key in obj2) {

            str2 += `<h1>Vegetable list</h1>
                        <li>${obj2[key].vegetables}</li>
                `;
        }
        vlist.innerHTML = str2;
    }

    xhr.send();
    console.log('FEtching VEgetable')
}