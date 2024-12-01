var userData = [];

if (localStorage.getItem("user") != null) {
    userData = JSON.parse(localStorage.getItem("user"));
}

var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passWordInput = document.getElementById("passWordInput");
var errorMessage = document.getElementById("errorMessage");
var welcomeMessage = document.getElementById("welcomeMessage");
var currentEmail = localStorage.getItem("currentUserEmail");
var currentUserName = localStorage.getItem("currentUserName");

function login() {
    var email = emailInput.value.trim();
    var password = passWordInput.value.trim();
    
    if (email === "" || password === "") {
        errorMessage.textContent = "Please enter your email and password";
        return;
    }

    var userData = JSON.parse(localStorage.getItem("user"));

    var user = userData.find(function(user) {
        return user.email === email;
    });

    if (user && user.password === password) {
        localStorage.setItem("currentUserEmail", email);
        localStorage.setItem("currentUserName", user.name);
        window.location.href = "main.html"
    } else {
        errorMessage.textContent = "Incorrect email or password.";
    }
}

if (currentUserName) {
    welcomeMessage.innerHTML = "Welcome" + " " + currentUserName;
} 

function logout() {
console.log("hi");
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("currentUserName");
}

function add() {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passWordInput.value.trim();

    if (password === "") {
        alert("Please enter your password");
        // errorMessage.textContent = "Please enter your password";
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        // errorMessage.textContent = "Please enter your email";
        return;
    }

    if (name === "") {
        alert("Please enter your name");
        // errorMessage.textContent = "Please enter your name";
        return;
    }

    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email === email) {
            alert("This email is already registered");
            return;
        }
    }

    var newUser = {
        name: name,
        email: email,
        password: password
    };
    userData.push(newUser);  

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration successful");

    window.location.href = "login.html";
}

function isValidEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}



































    // //عشان نخزن حاجه جوه ال local storage وبتاخد من الkey(string) وال value (string)
    // // localStorage.setItem("userName", "gamal")

    // //عشان نعرض الحاجه المتخزنه 
    // // console.log(localStorage.getItem("userName"))


    // // عشان نخزن اى حاجه جوه ال local stoarge لازم نحولها ل string بالطريقه دى وبترجعلى دايما(string)
    // // var userAge = JSON.stringify("25");

    // //وعشان نعرضها لازم نحولها لكده عشان ترجها لاصلها
    // // console.log(JSON.parse(userAge));

    // var sitees = [
    //     {
    //         name:"oppo",
    //         price:"8000",
    //         url:"phone",
    //         desc:"good"
    //     },
    //     {
    //         name:"samsung",
    //         price:"1000",
    //         url:"phone",
    //         desc:" very good"
    //     },
    //     {
    //         name:"toshiba",
    //         price:"2000",
    //         url:"TV",
    //         desc:"not bad"
    //     }
    // ]

    // // هنا بنحول ال array بتاعتنا ل string عشان نخزنها جوه ال local storage 
    // localStorage.setItem("sitees",JSON.stringify(sitees) );

    // //هنا بقى بنجيب ال array بتاعتنا من ال local storage بنستقبلها ب json.parse عشان ترجع لاصلها اللى احنا عايزينه وهو ال array
    // var site = JSON.parse(localStorage.getItem("sitees"));

    // console.log (site);



