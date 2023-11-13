$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

// Form Submit
document.getElementById("contact-form").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Your EmailJS configuration
  let serviceId = "service_7regsqa";
  let templateId = "template_hl6efol";

  emailjs.init(serviceId);

  // Your email template parameters
  var templateParams = {
    name: document.getElementById("FullName").value,
    email: document.getElementById("InputEmail").value,
    phone: document.getElementById("InputPhone").value,
    pickup: document.getElementById("InputPickup").value,
    date: document.getElementById("InputDateTime").value,

    // Add other form field values as needed
  };

  // Send the email
  emailjs.send(serviceId, templateId, templateParams).then(
    function (response) {
      console.log("Email sent successfully", response);
    },
    function (error) {
      console.log("Failed to send email", error);
    }
  );
};
