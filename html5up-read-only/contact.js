window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_jd36ak5', 'template_791y72e', this)
            .then(() => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error);
            });
        document.getElementById('contactForm').reset()
    });
}