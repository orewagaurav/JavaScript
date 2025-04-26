const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const orewa = {
    name: "Gaurav Kumar",
    age: 20,
    work: "SWE",
};

// console.log(Object.getOwnPropertyDescriptor(orewa,"name"));

Object.defineProperty(orewa, "name", {
    writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(orewa, "name"));
