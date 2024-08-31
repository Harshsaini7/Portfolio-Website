document.addEventListener('DOMContentLoaded', function() {
    // Slider Variables
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.nav-dots');
    let currentSlide = 0;
    const slidesPerView = 3;
    const totalSlides = slides.length;

    // Modal Variables
    const modal = document.getElementById("addSkillModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.querySelector(".close");
    const cancelBtn = document.getElementById("cancelBtn");
    const mainContent = document.getElementById("main-content");

    // Create navigation dots
    if (dotsContainer) {
        for (let i = 0; i <= totalSlides - slidesPerView; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(n) {
        if (slider) {
            slider.style.transform = `translateX(-${n * (100 / slidesPerView)}%)`;
            const activeDot = document.querySelector('.dot.active');
            if (activeDot) activeDot.classList.remove('active');
            const dots = document.querySelectorAll('.dot');
            if (dots[n]) dots[n].classList.add('active');
            currentSlide = n;
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % (totalSlides - slidesPerView + 1);
        goToSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds
    if (slider) {
        setInterval(nextSlide, 5000);
    }

    // Modal Open/Close Logic
    if (btn) {
        btn.onclick = function() {
            console.log("clicked");
            if (modal) modal.style.display = "block";
            if (mainContent) mainContent.classList.add("blur");
        }
    }

    if (span) {
        span.onclick = function() {
            if (modal) modal.style.display = "none";
            if (mainContent) mainContent.classList.remove("blur");
        }
    }

    if (cancelBtn) {
        cancelBtn.onclick = function() {
            if (modal) modal.style.display = "none";
            if (mainContent) mainContent.classList.remove("blur");
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            if (modal) modal.style.display = "none";
            if (mainContent) mainContent.classList.remove("blur");
        }
    }

    // Form Submission Logic
    const form = document.querySelector('.info-details');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting
        
            // Get the form data
            const userName = document.querySelector('input[name="user-name"]').value;
            const userEmail = document.querySelector('input[name="user-email"]').value;
            const userSubject = document.querySelector('input[name="your-subject"]').value;
            const userMessage = document.querySelector('textarea[name="user-subject"]').value;
        
            // Create an object with the form data
            const userObject = {
                name: userName,
                email: userEmail,
                subject: userSubject,
                message: userMessage
            };
        
            // Log the form data to the console
            console.log('User Data:', userObject);
        
            // Clear the form fields
            document.querySelector('input[name="user-name"]').value = "";
            document.querySelector('input[name="user-email"]').value = "";
            document.querySelector('input[name="your-subject"]').value = "";
            document.querySelector('textarea[name="user-subject"]').value = "";
        });
        
        this.reset();
    }
});