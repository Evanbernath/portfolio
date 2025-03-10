const button = document.querySelector("button");
let darkMode = false

button.addEventListener("click", (event) => {
    
    if (!darkMode){
        document.querySelector("#lightMode").disabled = true;
        document.querySelector("#darkMode").disabled = false;
        darkMode = true;
    }
    
    else {
        document.querySelector("#lightMode").disabled = false;
        document.querySelector("#darkMode").disabled = true;
        darkMode = false;

    }
})