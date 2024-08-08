document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;
    let subject = document.getElementById("subject").value;
    
    
    let userArr= JSON.parse(localStorage.getItem("user"))|| [];

    let userDetail ={
        name: name,
        email: email,
        subject:subject,
        message:message
    };
    console.log(userDetail);
    userArr.push(userDetail);

    localStorage.setItem("user",JSON.stringify(userArr));
    document.querySelector("form").reset();
});