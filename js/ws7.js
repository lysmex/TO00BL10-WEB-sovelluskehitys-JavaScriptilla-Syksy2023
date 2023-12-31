// Tehtävä 1
// luodaan funktio parseData ()
function parseData() {
  // tehdään muuttuja, joka hakee tiedostosta kaikki quote tagin sisällöt
  var quoteXMLAr = document.querySelectorAll("quote");
  // tehdään muuttuja, joka hakee tiedostosta kaikki author tagin sisällöt
  var authorXMLAr = document.querySelectorAll("author");

  // tehdään muuttujat yksittäiselle quotelle ja authorille
  var quoteXML;
  var authorXML;

  // luodaan looppi, jolla käydään läpi kaikki tiedostosta löytyvät quote ja author tagit
  for (let i = 0; i < quoteXMLAr.length; i++) {

    //tallennetaan yksitellen kaikkien quote ja author tagien sisältö muuttujaan
    quoteXML = quoteXMLAr[i].innerHTML + "<br>";
    authorXML = authorXMLAr[i].innerHTML + "<br><br>";
    // loin html-tiedostoon uuden divin id:llä authorquote, jonka innerHTMLää muutetaan näyttämään äskeiset muuttujat
    document.querySelector("#authorquote").innerHTML += quoteXML + authorXML;
  }
}

// Tehtävä 2

//function loadXMLFile() {
//   var xmlhttp = new XMLHttpRequest();
//  xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5:%20Asynchronous%20JavaScript%20(AJAX)/famous-quotes.xml", true);
//xmlhttp.send();

//    xmlhttp.onreadystatechange = function () {
//      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//        document.getElementById("quotes").innerHTML = xmlhttp.responseText;
//  }
//}
//}

// Tehtävä 4
// funktion parametri url kutsutaan html-tiedostossa onclickevent kohdassa
function loadAndParseNews(url) {
  //tehdään ajax kutsu (tämä on "aina sama")
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // määritellään vastauksen käsittelijä (määrittely, virheiden tsekkaus ja datan määrittely on "aina sama")
  xmlhttp.onreadystatechange = function () {
    // tarkistetaan virheet
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      data = xmlhttp.responseXML;
      // valitaan xml datasta kaikki tägit "title"
      let uutiset = data.querySelectorAll("title");
      // valitaan xml datasta kaikki tägit "link"
      let linkit = data.querySelectorAll("link");
      let uutinen;
      let linkki;

      // käydään for-loopilla läpi kaikki xml datasta löytyvät tägit "title" (koska muuttuja uutiset hakee titlet ja uutinen hakee yksitellen uutiset muuttujan innerHTML:n)
      for (let i = 0; i < uutiset.length; i++) {
        // uutinen hakee yksitellen muuttujan uutiset innerHTML:n
        uutinen = uutiset[i].innerHTML + "<br>";
        // tulostetaan uutiset konsoliin
        console.log(uutinen);
        linkki = linkit[i].innerHTML;
        // haetaan html tiedostosta div elementti, joka id on newsfeed ja muutetaan sen innerHTML:ksi lista, joka sisältää linkin (joka haettu xml datasta tägillä link) ja uutisen (joka haettu xml datasta tägillä title)
        // += tekee sen, että uusi haettu uutinen lisätään aina viimeisimmän perään. pelkkä = merkki tekisin sen, että uutisen haku aina korvaisi edellisen linen, jolloin diviin tulostuisi vain viimeisin uutinen
        document.querySelector("#newsfeed").innerHTML +=
          "<li><a href='" + linkki + "' target='_blank'>" + uutinen + "</a>";

        // linkki voidaan myös rakentaa näin
        // let rivi = `<a href="${linkit[i].innerHTML}">{$uutinen}</a><br>`
        // document.querySelector("#newsfeed").innerHTML += rivi;
      }
    }
  };
}
