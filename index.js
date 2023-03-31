//Database of users
let dbUsers = [
    {
        username : "bob",
        password : "ILikeToFixIt",
        name : "BobTheBuilder",
        email : "bob@fixit.com"
    },
    {
        username : "kermit",
        password : "MissPiggie12",
        name : "KermitTheFrog",
        email : "Kermit@muppet.com"
    },
    {
        username : "red",
        password : "123456",
        name : "Elmo",
        email : "elmo@sesame.com"
    }
]

//Function for Login
function login(username, password) {
    console.log("Alert! Alert! Someone is logging in!", username, password) //Display message to ensure function is called

    //Verify username is in the database
    let match = dbUsers.find(element => 
        element.username == username
    )
    if (match) {
        if (match.password == password) {
            return match
        } else {
            return ( "Error! password is wrong :D" )
        }
    } else {
        return ( "Error! username is wrong :D" )
    }
}


//call login function
console.log (login("bob","ILikeToFixIt"))