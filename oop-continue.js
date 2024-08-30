class User {
    fullName;
    #email= "test@test.com";
    address;
    phone;

    static role = 'admin'

    //setEmail =(_email) => {
    //    this.#email=_email
    //}

    constructor(_name,_address, _phone, _email=null){
        this.fullName =_name;
        this.#email=_email
        this.address=_address
        this.phone=_phone
    }

    static getStaticValue = () => {
        console-log("I am static function".thid.fullName)
    }

    getEmail = () => {
        return this.#email;
    }
}
const obj = new User("Sujan Tripathee", "Ktm",1234);
console.log(obj)