
// Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active')
};

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, about-content, .services-content', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'UX/UI Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// const form = document.querySelector('form'); 
// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "anupersonal153@gmail.com",
//         Password : "09CDF130A1EBF860C45A277D930543DDFD06",
//         To : 'anuperumal153@gmail.com',
//         From : "anupersonal153@gmail.com",
//         Subject : "New Contact",
//         Body : "And this is the body"
//     }).then(
//         message => console.log("Email sent:", message)
//     ).catch(
//         error => console.error("Error:", error)
//     );
// }


// Initialize email.js
(function () {
    emailjs.init("hDw-tVDs_mmewxfhw");
})();

// Function to send email
function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    const hasErrors = checkInputs();

    if (hasErrors) {
        Swal.fire({
            title: "Error!",
            text: "Please fill in all required fields.",
            icon: "error"
        });
        return; // Stop here if there are validation errors
    }


    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_mb14q32";
    const templateID = "template_r2tr91s";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            if (res.status === 200) { // Check if the response status is OK (200)
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    customClass: {
                        popup: 'swal2-popup',
                        title: 'swal2-title',
                        htmlContainer: 'swal2-html-container',
                        confirmButton: 'swal2-confirm'
                    }
                });
            }
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            // alert("Message sent successfully!");
        })
        .catch((err) => console.log("Failed to send message", err));
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    let hasErrors = false;

    for (const item of items) {
        const errorText = item.parentElement.querySelector(".error-txt");

        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            errorText.style.display = "block";
            hasErrors = true;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
            errorText.style.display = "none";
        }

        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
                errorText.style.display = "none";
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                errorText.style.display = "block";
            }
        });
    }

    return hasErrors; // Return true if any field is empty
}


