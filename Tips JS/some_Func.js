const people = [
    { name: "Sushanth", age : 19 },
    { name: "Shadow", age : 29 },
    { name: "Shridhar", age : 19 },
    { name: "Shreya", age : 18 },
    { name: "Shravya", age : 16 },
    { name: "Raksha", age : 37 },
];

const hasAdults = people.some(
    (person) => person.age >= 18
);

const hasChildren = people.some(
    (person) => person.age <18
);

const isSushanthPresent = people.some(
    (person) => person.name === "Sushanth"
);

console.log(hasAdults);
console.log(hasChildren);
console.log(isSushanthPresent);