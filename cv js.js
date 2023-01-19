function toggle(y) {
    let x = document.querySelector(y);
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function slideToggle(y) {
    document.querySelector(y).classList.toggle('hide');
    slideDiv(y);
}
function slideDiv(y) {
    document.querySelector(y).classList.toggle('hideDiv');
}

window.onscroll = () => {
    if (document.body.scrollTop > 315 || document.documentElement.scrollTop > 315) {
        document.querySelector("#nav").style.height = '45px';
        document.querySelector("#nav").style.background = 'linear-gradient(90deg, rgba(2, 48, 71, 1) 0%, rgba(255, 255, 255, 1) 100%)';
        document.querySelector("#nav").style.gridTemplateColumns = "1% 29% 30% 11% 3% 3% 12% 10% 1%";
        document.querySelector("#nav h1").style.color = "#ffffff";
        document.querySelector("#nav h1").style.fontSize = "20px";

    } else {
        document.querySelector("#nav").style.height = '65px'
        document.querySelector("#nav").style.background = '#ffffff'
        document.querySelector("#nav").style.gridTemplateColumns = "10% 20% 30% 11% 3% 3% 3% 10% 10%";
        document.querySelector("#nav h1").style.color = "#023047"
        document.querySelector("#nav h1").style.fontSize = "24px";
    }
}