// eye icon work
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye-slash');
    });
});
// image falling


gsap.from("#bench", {

    x: -1500,
    duration: 1,
    delay: 1,
    rotate: 1360,
    scale: 1.5,
    stagger:0.6,


})
