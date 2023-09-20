
const user = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

exports.getAllUsers = (request, response) => {
    response.json(user);
}

exports.loginAuth = (request, response) => {
    let body = request.body

    for (i = 0; i < user.length; i++) {

        if (body.username == user[i].username) {
            if (body.password == user[i].password) {
                return response.status(200).json({ message: "Login Successfull" })
            } else {
                return response.status(200).json({ message: "Wrong Password" })
            }
        } else {
            response.status(200).json({ message: "Username does not exist. Please Register" })
        }
    }

}


exports.register = (request, response) => {
    let body = request.body

    let duplicateUsername = user.filter(username => {
        console.log("USERName", username.username)
        console.log("Duplicate Username: ", body.username)
        return username.username == body.username

    })
    console.log("Dup Username: ", duplicateUsername)

    let duplicateId = user.filter(username => {
        if (username.id == body.id) {
            console.log("USER ID", username.id)
            console.log("Duplicate ID: ", body.id)
            return 1;
        }
    })

    console.log("ID match: ", duplicateId)

    let duplicateEmail = user.filter(username => {
        if (username.email == body.email) {
            return 1;
        }
    })

    //console.log("Duplicate?: ", duplicateUsername)

    // if(body.id){
    //     if(body.username && duplicateUsername){
    //         if (body.email){
    //             if(body.password){
    //                 if(body.name){
    //                     user.push(body);
    //                     response.status(200).json({message: "User Registered"})
    //                 }
    //             }
    //         }
    //     }
    // }

    for (const property in body) {
        if (!body[property]) {
            return response.status(200).json({ message: `Missing: ${property}` })
        }
    }

    if (duplicateUsername.length == 0) {
        if (duplicateId.length == 0) {
            if (duplicateEmail.length == 0) {
                if (body.hasOwnProperty('password') && body.hasOwnProperty('username') && body.hasOwnProperty('id') && body.hasOwnProperty('email') && body.hasOwnProperty('name')){
                    user.push(body);
                    response.status(200).json({ message: "User Registered" })
                }else{
                    response.status(200).json({ message: "Cannot Add User, missing one of the required data elements: ID, USERNAME, Email,  PASSWORD, or NAME, " })
                }
            } else {
                response.status(200).json({ message: "User Email ALREADY EXISTS" })
            }
        } else {
            response.status(200).json({ message: "User ID ALREADY EXISTS" })
        }
    } else {
        response.status(200).json({ message: "Username ALREADY EXISTS" })
    }






}