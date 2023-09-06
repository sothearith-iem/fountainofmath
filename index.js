function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        phonenumber: document.getElementById("phonenumber").value ,
        message: document.getElementById("message").value ,
    }

    const serviceID = "service_u550fde";
    const templateID = "template_2zqbtos";

    emailjs
        .send(serviceID,templateID,params)
        .then(
            (res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phonenumber").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message has been sent.");
            }
        )
    .catch((err) => console.log(err));
}