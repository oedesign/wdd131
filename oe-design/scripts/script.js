// DOM ELEMENTS
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contactForm');
const darkToggle = document.getElementById('dark-toggle');
const darkStyle = document.getElementById('dark-style');

// 🔀 Toggle Hamburger Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// 🌙 Toggle Dark Mode
darkToggle.addEventListener('click', () => {
    const enabled = darkStyle.hasAttribute('disabled');
    if (enabled) {
        darkStyle.removeAttribute('disabled');
        localStorage.setItem('theme', 'dark');
    } else {
        darkStyle.setAttribute('disabled', '');
        localStorage.setItem('theme', 'light');
    }
});

// 🔁 Load Preferred Theme on Page Load
if (localStorage.getItem('theme') === 'dark') {
    darkStyle.removeAttribute('disabled');
}

// 📧 Contact Form Submission with Validation, Object, localStorage, and Template Literals
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subscribe = contactForm.querySelector('input[name="subscribe"]').checked;

    // ✅ Conditional Branching for Validation
    if (name && email && message) {
        // ✅ Using Object
        const formData = {
            name,
            email,
            message,
            subscribe,
            submittedAt: new Date().toISOString()
        };

        // ✅ Store in localStorage
        localStorage.setItem('contactData', JSON.stringify(formData));

        // ✅ Template Literal Output
        alert(`Thanks for contacting us, ${name}! We'll get back to you soon.`);

        contactForm.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});
