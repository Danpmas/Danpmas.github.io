
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY|| document.documentElement.scrollTop;
        
        // Adjust these values based on your layout
        var section2Start = document.getElementById('section2').offsetTop;
        var section3Start = document.getElementById('section3').offsetTop;

        var section1 = document.getElementById('section1');
        var section3 = document.getElementById('section3');

        // Adjust background position based on scroll
        if (scrollPosition < section2Start) {
            section1.style.backgroundPositionY = (-scrollPosition * 0.5) + 'px';
        } else if (scrollPosition >= section2Start && scrollPosition < section3Start) {
            section3.style.backgroundPositionY = ((scrollPosition - section3Start) * 0.5) + 'px';
        }
    });
