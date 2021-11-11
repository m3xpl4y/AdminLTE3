// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function darkmodeChange() {
    if (document.getElementById("bodyContainer").classList.contains('dark-mode')) {

        document.getElementById("bodyContainer").classList.remove('dark-mode');
        window.localStorage.setItem("visualMode", "");
        

    }
    else {
        document.getElementById("bodyContainer").classList.add("dark-mode");
        window.localStorage.setItem("visualMode", "dark-mode");
       

    }
    //document.getElementById("bodyContainer").classList.toggle("dark-mode");
}

function localstorageSaveData() {
    window.localStorage.setItem("visualMode", document.getElementById("bodyContainer").value);
}
function alstorageLoadData() {


    var darkmode = window.localStorage.getItem("visualMode");


    if (darkmode === "dark-mode") {

       

        document.getElementById("bodyContainer").classList.add("dark-mode");

    }
    else {
        document.getElementById("bodyContainer").classList.remove('dark-mode');
       


    }

  

    return darkmode;
   
}

window.onload = alstorageLoadData;