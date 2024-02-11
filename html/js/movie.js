
    document.getElementById("play-button").addEventListener("click", function() {
     var videoContainer = document.getElementById("video-container");
     videoContainer.style.display = "block";
    });
    
    function showVideo(videoUrl) {
        var videoFrame = document.getElementById("videoFrame");
        videoFrame.src = videoUrl;

        var videoContainer = document.getElementById('video-container');
        videoContainer.style.display = 'block';

        var overlay = document.getElementById('overlay');
        overlay.style.display = 'block';

        document.body.appendChild(videoContainer);
        document.body.appendChild(overlay);
    }

    function closePopup() {
        var videoFrame = document.getElementById("videoFrame");
        videoFrame.src = "";

        document.getElementById("video-container").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
