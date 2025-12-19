// js\contactForm.js
// Contact Form
function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = {
        nom: form.nom.value,
        email: form.email.value,
        date: form.date.value,
        message: form.message.value
    };

    // Construct mailto link
    const subject = encodeURIComponent('Contact via le site Au Paradis O\'Fer');
    const body = encodeURIComponent(
        `Nom : ${formData.nom}\n` +
        `Email : ${formData.email}\n` +
        `Date souhaitée : ${formData.date || 'Non précisée'}\n\n` +
        `Message :\n${formData.message}`
    );

    window.location.href = `mailto:au.paradis.o.fer@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    form.reset();
    alert('Merci pour votre message ! Votre client de messagerie va s\'ouvrir.');
}
