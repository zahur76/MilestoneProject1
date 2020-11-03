function sendMail(contactForm) {    
    emailjs.send("gmail", "zahur ", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "query_request": contactForm.query.value
    })
    .then(
        function(response) {            
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    if(reponse = "OK"){
        $("#message").text("Your message was sent!");
        $("#myForm").trigger("reset");
    }

    return false;  // To block from loading a new page
}

