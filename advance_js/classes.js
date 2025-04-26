//ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abcd`
    }

    captalize(){
        return `${this.username.toUpperCase()}`
    }
}

const obj1 = new User("chai","chai@gmail.com","123")
console.log(obj1.encryptPassword());
console.log(obj1.captalize());
