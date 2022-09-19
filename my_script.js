console.log("My script is running !");

const mycolorshouldbeblue = document.querySelector("p");
const imbluedabudedabudae = document.querySelector("img");

mycolorshouldbeblue.style.cursor = "pointer";

mycolorshouldbeblue.addEventListener('click', () => {
    imbluedabudedabudae.style.display = 'block';
});