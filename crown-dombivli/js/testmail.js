// var templateParams = {
//   name: "James",
//   notes: "Check this out!",
// };

// emailjs.send("service_7regsqa", "template_hl6efol", templateParams).then(
//   function (response) {
//     console.log("SUCCESS!", response.status, response.text);
//   },
//   function (error) {
//     console.log("FAILED...", error);
//   }
// );

// https://api.ipify.org
let ip = fetch("https://api.ipify.org")
  .then((res) => res.text())
  .then((ip) => console.log(ip))
  .catch((err) => console.log(err));

// Working:-
window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("contact_service", "contact_form", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};

// Try:-

// window.onload = function () {
//   document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Get Form Values
//     // var name = document.getElementById("user_name").value;
//     // var phoneNumber = document.getElementById("contact_number").value;
//     // var email = document.getElementById("user_email").value;
//     // var date_time = document.getElementById("date_time").value;

//     // Your email template parameters
//     var templateParams = {
//       name: document.getElementById("user_name").value,
//       email: document.getElementById("user_email").value,
//       contact_number: document.getElementById("contact_number").value,
//       date_time: document.getElementById("date_time").value,
//       // Add other form field values as needed
//     };
//     let date_only = templateParams.date_time.split("T")[0];
//     let time_only = templateParams.date_time.split("T")[1];

//     var emailBody = `
//       <p><strong>Name:</strong> ${templateParams.name}</p>
//       <p><strong>Phone Number:</strong> ${templateParams.contact_number}</p>
//       <p><strong>Email:</strong> ${templateParams.email}</p>
//       <p><strong>Pickup Date:</strong> ${date_only}</p>
//       <p><strong>Pickup Date:</strong> ${time_only}</p>
//     `;

//     console.log(emailBody);

//     // emailjs.send("contact_service", "contact_form", templateParams).then(
//     //   function (response) {
//     //     console.log("SUCCESS!", response.status, response.text);
//     //     document.getElementById("contact-form").reset();
//     //   },
//     //   function (error) {
//     //     console.log("FAILED...", error);
//     //   }
//     // );
//   });
// };
