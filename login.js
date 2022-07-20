// const email = document.getElementById(e1);
// const pass = document.getElementById(p1);

function loginUser() {
    let email = document.getElementById("login-email").value;
    let psw = document.getElementById("login-pass").value;

    let user_records = new Array();
    var flag = false
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    for (x = 0; x < user_records.length; x++)  
    {   
        if (user_records[x]['email'] == email && user_records[x]['password'] == psw)
        {
            alert("Login successfully");
            window.location.href = "landingPage.html";
            flag = true
            localStorage.setItem('session', JSON.stringify(user_records[x]))
        }
    }
    if (flag == false)
    {
        alert("login failed");
    }
    
   
}



//     const loginInfoemail = JSON.parse(window.localStorage.getItem("email"));
//     const loginInfopass = JSON.parse(window.localStorage.getItem("password"));
//     if ((UserEmail === loginInfoemail.email ) && (UserPass === loginInfopass.pass)) {
//         alert("Login successfully");
//     }
//     else {
//         alert("Error ");
//     }
// }


// function Check() {
//     // var userfname = localStorage.getItem("fname", fname);

//     // var userlname = localStorage.getItem("lname", lname)

//     var emails = localStorage.getItem("email", email);

//     var pass = localStorage.getItem("password", password);

//     // var cpass = localStorage.getItem("confirmpassword", confirmpassword);

//     if (email == emails && password == pass) {
//         alert("login successfully");
//     }
//     else {
//         alert("Please fill correct details");
//     }
// }