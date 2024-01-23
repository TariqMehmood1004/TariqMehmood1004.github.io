

 // Initialize Email.js with your user ID
 emailjs.init("G_0bvMt_sK1iEcptn");

 function sendMail() {

    const serviceID = "service_2fimh7p";
    const templateID = "template_hjq1r6k";

   var params = {
     name: "dear",
     email: document.querySelector("#emailInput").value,
     message: "This user subscribed to our newsletter.",
   };

   // Send subscription email
   emailjs.send(serviceID, templateID, params)
     .then((res) => {
       alert(`Subscription message sent successfully!\nUser email: ${params.email}`);
       
       // Set modal message dynamically
       document.getElementById("modal-message").innerText = "You have subscribed to our newsletter.";

       // Send confirmation email to the subscriber
       sendConfirmationEmail(params.email);
    })
    .catch((err) => console.log(err));
    
    
    document.querySelector("#emailInput").value = "";
 }

 function sendConfirmationEmail(subscriberEmail) {
   var confirmationParams = {
     to_email: subscriberEmail, // Set the subscriber's email as the recipient
     name: "dear",
     message: "Thank you for subscribing to our newsletter. You will receive updates and news.",
   };

   const confirmationServiceID = "service_2fimh7p";
   const confirmationTemplateID = "template_confirmation"; // Replace with your confirmation template ID

   // Send confirmation email to the subscriber
   emailjs.send(confirmationServiceID, confirmationTemplateID, confirmationParams)
     .then((res) => {
       alert(`Confirmation message sent successfully!\nUser email: ${confirmationParams.to_email}`);
       console.log("Confirmation message sent successfully!");
     })
     .catch((err) => console.log(err));
 }


 /*
    - msgUserName
    - msgUserEmail
    - msgUserSubject
    - msgUserMessage
 */

// Initialize Email.js with your user ID
emailjs.init("G_0bvMt_sK1iEcptn");

function sendMessage() {
  const serviceID = "service_2fimh7p";
  const templateID = "template_wsygogf";

  var params = {
    msgUserName: document.querySelector("#msgUserName").value,
    msgUserEmail: document.querySelector("#msgUserEmail").value,
    msgUserSubject: document.querySelector("#msgUserSubject").value,
    msgUserMessage: document.querySelector("#msgUserMessage").value,
  };

  // Send message email
  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      alert(`Message sent successfully!\nUser email: ${params.msgUserEmail}`);
      
      // Clear the form
      document.querySelector("#messageForm").reset();
      
      // Send confirmation email to the user
      sendConfirmationEmail(params.msgUserEmail);
    })
    .catch((err) => console.log(err));
}


