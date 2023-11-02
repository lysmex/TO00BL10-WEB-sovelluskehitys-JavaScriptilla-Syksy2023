function parseData() {
    let ourRequest = new XMLHttpRequest();
    ourRequest
}

function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        document.getElementById("quotes").innerHTML = xmlhttp.responseText;
    }
}