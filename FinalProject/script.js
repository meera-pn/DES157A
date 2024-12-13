/*
(function() {
    var containers = document.querySelectorAll('.image-container');
    var currentContainerIndex = 0;

    function showContainer(index) {
        containers.forEach((container, idx) => {
            container.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    function setupImageCDInteraction(container) {
        const image = container.querySelector('.gallery-image');
        if (!image) return;

        const cd = container.querySelector('.cd-image');
        const additionalImages = container.querySelectorAll('.additional-image');
        const audio = document.getElementById(cd.id === 'cd1' ? 'audio1' : 'audio2');

        image.addEventListener('click', function() {
            let isActive = cd.classList.toggle('active');
            cd.style.opacity = isActive ? 1 : 0;
            image.style.transform = isActive ? 'translateX(-50%)' : 'translateX(0%)';
            cd.style.transform = isActive ? 'translateX(80%)' : 'translateX(0%)';
            additionalImages.forEach(img => {
                img.style.display = isActive ? 'block' : 'none';
                img.style.opacity = isActive ? 1 : 0;
                img.style.transform = isActive ? 'scale(1)' : 'scale(0)';
            });
        });

        cd.addEventListener('mouseenter', function() {
            if (cd.classList.contains('active')) {
                audio.play();
            }
        });

        cd.addEventListener('mouseleave', function() {
            audio.pause();
            audio.currentTime = 0; 
        });
    }

    containers.forEach(container => {
        setupImageCDInteraction(container);
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        currentContainerIndex = (currentContainerIndex - 1 + containers.length) % containers.length;
        showContainer(currentContainerIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        currentContainerIndex = (currentContainerIndex + 1) % containers.length;
        showContainer(currentContainerIndex);
    });


    showContainer(0);
})();
*/



(function() {
    var containers = document.querySelectorAll('.image-container');
    var currentContainerIndex = 0;

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    function showContainer(index) {
        containers.forEach((container, idx) => {
            container.style.display = (idx === index) ? 'block' : 'none';
        });
        updateArrows(); // Update arrows based on current slide
    }

    function updateArrows() {
        // Hide left arrow if on the first slide
        if (currentContainerIndex === 0) {
            leftArrow.style.display = 'none';
        } else {
            leftArrow.style.display = 'block';
        }

        // Hide right arrow if on the last slide
        if (currentContainerIndex === containers.length - 1) {
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'block';
        }
    }

    function setupImageCDInteraction(container) {
        const image = container.querySelector('.gallery-image');
        if (!image) return;

        const cd = container.querySelector('.cd-image');
        const additionalImages = container.querySelectorAll('.additional-image');
        const audio = document.getElementById(cd.id === 'cd1' ? 'audio1' : 'audio2');

        image.addEventListener('click', function() {
            let isActive = cd.classList.toggle('active');
            cd.style.opacity = isActive ? 1 : 0;
            image.style.transform = isActive ? 'translateX(-50%)' : 'translateX(0%)';
            cd.style.transform = isActive ? 'translateX(80%)' : 'translateX(0%)';
            additionalImages.forEach(img => {
                img.style.display = isActive ? 'block' : 'none';
                img.style.opacity = isActive ? 1 : 0;
                img.style.transform = isActive ? 'scale(1)' : 'scale(0)';
            });
        });

        cd.addEventListener('mouseenter', function() {
            if (cd.classList.contains('active')) {
                audio.play();
            }
        });

        cd.addEventListener('mouseleave', function() {
            audio.pause();
            audio.currentTime = 0; 
        });
    }

    leftArrow.addEventListener('click', function() {
        if (currentContainerIndex > 0) {
            currentContainerIndex--;
            showContainer(currentContainerIndex);
        }
    });

    rightArrow.addEventListener('click', function() {
        if (currentContainerIndex < containers.length - 1) {
            currentContainerIndex++;
            showContainer(currentContainerIndex);
        }
    });

    // Initialize all interactivity and set up arrows
    containers.forEach(container => {
        setupImageCDInteraction(container);
    });

    // Show the first slide on page load
    showContainer(0);
})();

