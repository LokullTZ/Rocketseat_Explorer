document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.querySelector('#scroll-button');
    scrollButton.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector('a').getAttribute("href");
        scrollToSection(target);
    })
})

function scrollToSection(target) {
    const targetElement = document.querySelector(target);
    if(targetElement){
        targetElement.scrollIntoView({behavior: "smooth"});
    }
}
