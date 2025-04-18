//objects singleton 

// const fbUser = new Object()  //singleton obj

const fbUser ={}  //non singleton obj

fbUser.id="abc23"
fbUser.name ="Ravi Raj"
fbUser.email = "ravirock@gmail.com"
fbUser.loggedIn=false

// console.log(fbUser);

const igUser ={
    name:"Gaurav Kumar",
    userId:"orewa_gaurav_01",
    email:"orewagaurav1@gmail.com",
    details:{
        userFullName:{
            firstName:"Gaurav",
            lastName:"Kumar"
        },
        userDob:{
            month:"April",
            year:"2005"
        }

    }
}
// console.log(igUser);
// console.log(igUser.details);
// console.log(igUser.details.userFullName.lastName);
// console.log(igUser.details.userDob.year);

const obj = {...fbUser,...igUser};
// console.log(obj);

const obj2 = Object.assign({},fbUser,igUser);  //(target,src,src)
// console.log(obj2);

// console.log(Object.keys(igUser));
// console.log(Object.values(igUser));

const course ={
    courseName:"Sikha Dungaa..",
    price :"$456",
    courseInstructor:"Mai Khud !" 
}

const {courseInstructor:master} = course
console.log(master);
