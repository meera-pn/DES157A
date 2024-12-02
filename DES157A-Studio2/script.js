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

