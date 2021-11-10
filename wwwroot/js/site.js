// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function darkmodeChange() {
    if (document.getElementById("bodyContainer").classList.contains('dark-mode')) {

        document.getElementById("bodyContainer").classList.remove('dark-mode');
    }
    else {
        document.getElementById("bodyContainer").classList.add("dark-mode");

    }
}
