let a = 12
console.log(a++)
console.log(++a)

let x = '9a'
let y = 10
console.log(x<y)

user = {
    name : "Sujan Raj tripathee",
    address : "Holland",
    email : 'sujan_triparthee@hotmail.com',
    age : 15
}

let student = {
    ...user,
    organization : 'Broadway',
    language : "MERN"
}

const name = "Test Name"

const { name : fullname, email, address, language, ...other}= student;
console.log(email, address, language, fullname);