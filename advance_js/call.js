function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username);

    this.email = email;
    this.password = password
}

const obj  = new  createUser("Zoro","zoro@king.com","navigator123")
console.log(obj);
