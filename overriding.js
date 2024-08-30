class User {
    test() {
        console.log("I am from User")
    }
}

class Person extends User {
    test() {
        super.test()
        console.log("I am from Perosn")
    }
}

const person = new Person();
person.test()