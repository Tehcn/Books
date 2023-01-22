window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    document.querySelector(".pb").style.background = `linear-gradient(to right, #498 ${scrollPercent * 100}%, #eee ${scrollPercent * 100}%)`;
}