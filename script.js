window.addEventListener('scroll', function() {
    requestAnimationFrame(updateBackground);
});

function updateBackground() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    var section2Start = document.getElementById('section2').offsetTop;
    var section3Start = document.getElementById('section3').offsetTop;

    var section1 = document.getElementById('section1');
    var section3 = document.getElementById('section3');

    if (scrollPosition < section2Start) {
        section1.style.backgroundPositionY = (-scrollPosition * 0.5) + 'px';
    } else if (scrollPosition >= section2Start && scrollPosition < section3Start) {
        section3.style.backgroundPositionY = ((scrollPosition - section3Start) * 0.5) + 'px';
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


      
