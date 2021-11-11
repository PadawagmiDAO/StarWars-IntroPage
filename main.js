document.getElementById("some-button").style.display = "none";

function showStuff() {
    document.getElementById("some-button").style.display = "inline";
}

function myFunction() {
    window.location = "project.html"
}

setTimeout(showStuff, 30000);