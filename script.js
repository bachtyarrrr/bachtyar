function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
    scrollToElement('container');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.container', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.container', 2);
});
link4.addEventListener('click', () => {
    scrollToElement('.container', 3);
});
link5.addEventListener('click', () => {
    scrollToElement('.container', 4);
});

const headerElement = document.querySelector("header");
// const linkElement = document.getElementsByClassName("nav-link");

const headerObserver = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;

        if(!entry.isIntersecting){
            document.querySelector("nav").classList.add("scrolled")
            // document.getElementsByClassName("nav-link")
        } else {
            document.querySelector("nav").classList.remove("scrolled")
        }
}, {threshold: 0.98})

headerObserver.observe(headerElement)

