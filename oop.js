function User() {
    this.name = "Sujan"
}

const userObj = new User();
console.log(userObj)
userObj.name = "Outside Class"
console.log(userObj)

const userObj1 = new User();
console.log(userObj1)