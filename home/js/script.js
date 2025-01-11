const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    alert('Thank you for your message!');
    contactForm.reset();
});