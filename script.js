function show_loader(){
    document.querySelector("#loader").style.display = "block";
}

function hide_loader(){
    document.querySelector("#loader").style.display = "none";
}

const button = document.querySelector("#myButton");

button.addEventListener("click",()=>{
    button.style.display = "none";
    show_loader();
    setTimeout(()=>{
        hide_loader();
        document.querySelector("img").style.display = "block";
    },1500);
});
