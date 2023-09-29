      // Tehtävä 1.1 Haetaan nappi, lisätään kuuntelija. Nappia klikattaessa etsitään h1 elementti, joita on vain yksi sivulla, ja vaihdetaan sen sisältö

      let button1 = document.querySelectorAll("button")[0];
      button1.addEventListener("click", function () {
        let etsiHeading = document.querySelector('h1');
        etsiHeading.innerHTML = "Modified Heading!";
      });

      // 1.2 Haetaan toinen nappi, lisätään kuuntelija. Nappia klikattaessa etsitään h2 elementtien toinen ja muutetaan sen tyylittelyä

      let button2 = document.getElementsByTagName("button")[1];
      button2.addEventListener("click", function () {
        let etsiHeading2 = document.getElementsByTagName("h2")[1];
        etsiHeading2.style.backgroundColor = "lightblue";
        etsiHeading2.style.fontSize = "36px";
        etsiHeading2.style.fontStyle = "Italic";
        etsiHeading2.style.color = "red";
      });

      // 1.3 Haetaan kolmas nappi, lisätään kuuntelija. Nappia klikattaessa luodaan uusi p-elementti ja etsitään sivulla oleva neljäs p-elementti. Lisätään uusi neljännen perään. Lisätään sivun taustavärin vaihto

      let button3 = document.getElementsByTagName("button")[2];
      button3.addEventListener("click", function () {
        let uusiTeksti1 = document.createElement("p");
        uusiTeksti1.innerHTML = ` "<em> \"Lorem ipsum dolor sit amet, consectetuer
            					adipiscing elit. Sed posuere interdum sem. Quisque ligula eros
            					ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius
            					diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et
            					venenatis eget velit.\" </em>" <br>
            					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1920px-Coca-Cola_logo.svg.png"
            					style="width:20%; display:block; margin-left:auto; margin-right:auto;">
            					`;

        let etsiPara = document.getElementsByTagName("p")[3];
        etsiPara.after(uusiTeksti1);

        document.body.style.backgroundColor = "lightpink";
      });

      // Tehtävä 2.1+2.2 etsitään checbox+lisätään kuuntelija. onchange etsitään elementti id:llä me ja asetetaan display none/block

      let valinta1 = document.getElementsByTagName("input")[0];
      valinta1.addEventListener("change", function () {
        let etsiId = document.getElementById("me");
        etsiId.style.display = "none";
      });

      let valinta2 = document.getElementsByTagName("input")[1];
      valinta2.addEventListener("change", function () {
        let etsiId = document.getElementById("me");
        etsiId.style.display = "block";
      });

      // 2.3 Haetaan kolmas checkbox+lisätään kuuntelija. onchange eventin tapahtuessa etsitään kaikki elementit, joiden class on surprise. Loopataan kaikkien läpi muuttaen fonttikokoa

      let valinta3 = document.getElementsByTagName("input")[2];
      valinta3.addEventListener("change", function () {
        let etsiYllatys = document.getElementsByClassName("surprise");
        for (let i = 0; i < etsiYllatys.length; i++) {
          etsiYllatys[i].style.fontSize = "20px";
        }
      });

      // Tehtävä 3: etsitään valikko ja auton kuva. lisätään ensin kuuntelija valikolle ja toiminnallisuus valikon arvon vaihtuessa näyttämään kullekin arvolle määritelty alert ja kuva
      // sitten lisätään kuuntelija mouseover ja mouseout ja niille toiminnallisuudet

      let etsiBoksi = document.getElementById("mySelect");
      let autonKuva = document.getElementById("carimage");
      etsiBoksi.addEventListener("change", function () {
        if (etsiBoksi.value == "Audi") {
          alert(etsiBoksi.value);
          autonKuva.src =
            "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yabdc/2023.png?wid=850";
        } else if (etsiBoksi.value == "Mercedes") {
          alert(etsiBoksi.value);
          autonKuva.src =
            "https://www.mercedes-benz.fi/content/finland/fi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_1674112418.component.damq2.3385491449487.jpg/mercedes-benz-cle-coupe-c236-home-stage-3840x3840-05-2023.jpg";
        } else if (etsiBoksi.value == "Volvo") {
          alert(etsiBoksi.value);
          autonKuva.src =
            "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my24/car-images/ex90-bev-my24-responsive.jpg?h=600&iar=0";
        } else {
          alert(etsiBoksi.value);
          autonKuva.src =
            "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg";
        }
      });

      autonKuva.addEventListener("mouseover", function () {
        autonKuva.style.border = "3px solid red";
      });
      autonKuva.addEventListener("mouseout", function () {
        autonKuva.style.border = "0px";
      });

      // Tehtävä 4: tiedostossa ei ole div-elementtiä id:llä carimage, joten käytän img-elementtiä id:llä carimage, joka olikin jo etsitty edellisessä tehtävässä

      let nappiMove = document.getElementsByTagName("button")[3];
      nappiMove.addEventListener("click", function () {
        autonKuva.style.marginLeft = "200px";
        autonKuva.style.marginTop = "500px";
      });

      // 4.2 muutin interval-arvoa, jotta kuva liikkuisi nopeammin. muuttelin myös dir arvoa säätelemään kuinka nopeasti kuva liikkuu
      // siirsin myös html-koodista javascriptin tänne, eli lisäsin napin haun + kuuntelijan.

      let nappiAnimate = document.getElementsByTagName("button")[4];
      nappiAnimate.addEventListener("click", function () {
        setInterval(function () {
          doMove();
        }, 1);

        let pos = 0;
        let dir = 3;
        let leveys = document.body.clientWidth - autonKuva.clientWidth;
        function doMove() {
          if (pos > leveys) dir = -3;
          else if (pos < 0) dir = 3;
          pos += dir;
          autonKuva.style.left = pos + "px";
        }
      });

      // 4.3 nappi, kuuntelija, javascript täällä. fadeoutin määrää ja nopeutta säädelty

      let nappiFade = document.getElementsByTagName("button")[5];
      nappiFade.addEventListener("click", function () {
        setInterval(function () {
          fadeOut();
        }, 10);

        function fadeOut() {
          let opacity = autonKuva.style.opacity;
          if (opacity > 0) {
            opacity -= 0.005;
            autonKuva.style.opacity = opacity;
          }
        }
      });

      // 4.4

      let nappiPoista = document.getElementsByTagName("button")[6];
      nappiPoista.addEventListener("click", function () {
        autonKuva.parentNode.removeChild(autonKuva);
      });

      // Tehtävä 5: haetaan insert-idllä oleva nappi, lisätän click kuuntelija. haetaan taulukko, johon lisätään. määritellään uuden rowin ja cellien sijainnit
      // haetaan input-lomakkeille käyttäjän syöttämät arvot ja lisätään ne aikaisemmin määriteltyjen solujen perusteella oikeaan sarakkeeseen
      let nappiInsert = document.getElementById("Insert");

      nappiInsert.addEventListener("click", function () {
        let table = document.getElementById("data");
        let row = table.insertRow(1);
        let cellName = row.insertCell(0);
        let cellPosition = row.insertCell(1);
        let cellSalary = row.insertCell(2);

        let getName = document.getElementById("textfield").value;
        let getPosition = document.getElementById("textfield2").value;
        let getSalary = document.getElementById("textfield3").value;

        cellName.innerHTML = getName;
        cellPosition.innerHTML = getPosition;
        cellSalary.innerHTML = getSalary;
      });