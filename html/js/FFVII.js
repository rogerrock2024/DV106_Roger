    document.addEventListener("DOMContentLoaded", function() {
    const hoverDiv = document.getElementById('hover-div');
    const hoverSound = document.getElementById('hover-sound');
    
    hoverDiv.addEventListener('mouseenter', function() {
        playHoverSound();
    });
    
    function playHoverSound() {
        hoverSound.currentTime = 0.4;
        hoverSound.play();
    }

    // 获取图片元素
    var fadeInImage = document.getElementById("logo-I");
  
    // 页面加载后，使用 setTimeout 来触发淡入效果
    setTimeout(function() {
        fadeInImage.style.opacity = "1"; // 将透明度设置为1，实现淡入效果
    }, 300); // 延迟100毫秒触发，确保过渡效果生效
});



document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bkmp3');
    audio.currentTime = 33;
    audio.play();
    });
  