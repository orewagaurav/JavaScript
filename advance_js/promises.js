const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Promise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//promise 3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({
            userName:"orewagaurav",
            name:"Gaurav",
            age:20,
            email:"orewagaurav1@gmail.com"
        })
        
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user.name);
})