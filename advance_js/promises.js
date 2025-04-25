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


//promise 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username:"gaurav",
                password:"abcd@123"
            })
        }else{
            reject("Error: Something went wrong")
        }
        
    },1000)
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.username; 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error); 
}).finally(()=>(console.log("promise is resolved or rejected")))

//promise 5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
            lan:"javaScript",
            age:"infinity"
            })
        }else{
            reject("Bhari Galti hogya malik")
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);  
    }catch{
        console.log("payara sa error");
        
    }
}

consumePromiseFive();

//fetch
// async function getAllUsers(){
//     try{
//         const response = await fetch("https://api.github.com/users/orewagaurav")

//         const data = await response.json()
//         console.log(data);
//     }catch{
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/orewagaurav")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>(console.log("error")))
.finally(function(){
    console.log("Kaam ho rha hai ");
    
})