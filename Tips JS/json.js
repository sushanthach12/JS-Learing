const json = {
    name : 'Sushanth',
    age : 19,
    online : true
};

const data = JSON.stringify(json, null, 4); // Here the third arguement is for space
console.log(data);