const icon = document.getElementById("butt");
const content = document.getElementById("buttt");
const size = document.getElementById("bu");

icon.addEventListener("click", function(){
    if(icon.firstElementChild.classList.contains("fa-circle-arrow-right"))
    {
        icon.firstElementChild.classList.remove("fa-circle-arrow-right");
        icon.firstElementChild.classList.add("fa-circle-arrow-left");
    }
    else if(icon.firstElementChild.classList.contains("fa-circle-arrow-left"))
    {
        icon.firstElementChild.classList.remove("fa-circle-arrow-left");
        icon.firstElementChild.classList.add("fa-circle-arrow-right");
    }
    if(size.classList.contains("left-container"))
    {
        size.classList.remove("left-container");
        size.classList.add("left-containers");
    }
    else if(size.classList.contains("left-containers"))
    {
        size.classList.remove("left-containers");
        size.classList.add("left-container");
    }
    content.classList.toggle("mainhh");
});