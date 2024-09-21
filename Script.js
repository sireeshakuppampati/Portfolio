document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


    function showVideo() {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `
            <div class="responsive-iframe">
                <iframe src="https://www.youtube.com/embed/84u0ZIllZGc?si=6O13faO58y2mCgLL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `;
    }

