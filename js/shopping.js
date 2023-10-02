// Tehtävä 1

function tehtavaYksi(){

  let lomakeEmail = document.querySelector('#email').value;
  let lomakeComment = document.querySelector('#comment').value;

  if (lomakeEmail == "") {
    alert("Email is required!");
    document.querySelector("#email").style.border = "3px solid red";
    document.querySelector("#virhe").innerHTML =
      "<strong>&nbsp;* Email is required</strong>";
    return false;
  }
  if (lomakeEmail.length < 6) {
    alert("Email is too short!");
    document.querySelector("#email").style.border = "3px solid red";
    document.querySelector("#virhe").innerHTML =
      "<strong>&nbsp;* Email is too short</strong>";
    return false;
  }
  if (lomakeEmail.length > 25) {
    alert("Email is too long!");
    document.querySelector("#email").style.border = "3px solid red";
    document.querySelector("#virhe").innerHTML =
      "<strong>&nbsp;* Email is too long</strong>";
    return false;
  }
  if (!lomakeEmail.includes("@")) {
    alert("Your emai address is missing a @!");
    document.querySelector("#email").style.border = "3px solid red";
    document.querySelector("#virhe").innerHTML =
      "<strong>&nbsp;* Email is missing @</strong>";
    return false;
  }
  if (lomakeComment == "") {
    alert("Comment is required!");
    document.querySelector("#comment").style.border = "3px solid red";
    document.querySelector("#virhe2").innerHTML =
      "<strong>* Comment is required</strong>";
    return false;
  }
  if (lomakeComment.length > 50) {
    alert("Comment needs to be less than 50 characters!");
    document.querySelector("#comment").style.border = "3px solid red";
    document.querySelector("#virhe2").innerHTML =
      "<strong>&nbsp;* Comment is too long</strong>";
    return false;
  } else {
    alert(lomakeEmail + ", " + lomakeComment);
    return true;
  }
}

function Piilota(){

let emailChecked = document.querySelector('#want_email');
let emailProvide = document.querySelector('#contact_email');
let callChecked = document.querySelector('#want_call');
let callProvide = document.querySelector('#contact_call');
let smsChecked = document.querySelector('#want_sms');
let smsProvide = document.querySelector('#contact_sms');

if (emailChecked.checked == false){
emailProvide.style.display="none";
} else {
  emailProvide.style.display="block";
}

if (callChecked.checked == false){
callProvide.style.display="none";
} else {
  callProvide.style.display="block";
}

if (smsChecked.checked == false){
smsProvide.style.display="none";
} else {
  smsProvide.style.display="block";
} }

// Tehtävä 2

let paketti = document.querySelector("#type");
let vuodet = document.querySelector("#years");
let hintaDisplay = document.querySelector("#cost");
let hinta = 0;

function laskeNappi() {
  if (paketti.value == "basic") {
    hinta = 10 * vuodet.value;
    if (vuodet.value > 2) {
      document.querySelector("#notice").innerHTML =
        "<strong>Eligible for 20% discount!</strong>";
      hinta = hinta * 0.8;
    }
    if (vuodet.value >= 5) {
      document.querySelector("#notice2").innerHTML =
        "Enjoy another special discount!";
      hinta = hinta - 5;
    }
    hintaDisplay.value = hinta;
  }
  if (paketti.value == "premium") {
    hinta = 15 * vuodet.value;
    if (vuodet.value > 2) {
      document.querySelector("#notice").innerHTML =
        "<strong>Eligible for 20% discount!</strong>";
      hinta = hinta * 0.8;
    }
    if (vuodet.value >= 5) {
      document.querySelector("#notice2").innerHTML =
        "Enjoy another special discount!";
      hinta = hinta - 5;
    }
    hintaDisplay.value = hinta;
  }
  if (paketti.value == "gold") {
    hinta = 20 * vuodet.value;
    if (vuodet.value > 2) {
      document.querySelector("#notice").innerHTML =
        "<strong>Eligible for 20% discount!</strong>";
      hinta = hinta * 0.8;
    }
    if (vuodet.value >= 5) {
      document.querySelector("#notice2").innerHTML =
        "Enjoy another special discount!";
      hinta = hinta - 5;
    }
    hintaDisplay.value = hinta;
  }
  if (paketti.value == "platinum") {
    hinta = 25 * vuodet.value;
    if (vuodet.value > 2) {
      document.querySelector("#notice").innerHTML =
        "<strong>Eligible for 20% discount!</strong>";
      hinta = hinta * 0.8;
    }
    if (vuodet.value >= 5) {
      document.querySelector("#notice2").innerHTML =
        "Enjoy another special discount!";
      hinta = hinta - 5;
    }
    hintaDisplay.value = hinta;
  }
}

// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.

// Exercise: 3
function calculate() {
  "use strict";

  // For storing the order total:
  var total;

  // Get references to the form values:
  var quantity = document.getElementById("quantity").value; // add value
  quantity = parseInt(quantity, 10);

  var price = document.getElementById("price").value;
  price = parseFloat(price);
  var tax = document.getElementById("tax").value; // add value
  tax = parseFloat(tax);
  var discount = document.getElementById("discount").value; //add value
  discount = parseFloat(discount);
  var shipping = document.getElementById("shipping").value; // add shipping
  shipping = parseFloat(shipping);

  // Add validation here later!

  // Calculate the initial total:
  total = quantity * price;
  console.log("total before tax: " + total);

  // Make the tax rate easier to use:
  tax = tax / 100;
  tax = tax + 1;

  // Factor in the tax:
  total = total * tax;
  console.log("total after tax: " + total);

  // Factor in the discount:
  if (quantity > 100) {
    total = total - (2 * discount);
  } else {
    total = total - discount;
  }
  total = total + 1.0 * shipping;
  console.log("total after discount: " + total);

  // Format the total to two decimal places:
  total = total.toFixed(2);

  // Display the total:
  document.getElementById("total").value = total;

  // Return false to prevent submission:
  return false;
} // End of calculate() function.


// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
// Exercise: 2 using eventListener
//function init() {
//    'use strict';

// Add an event listener to the form:

//    var theForm = document.getElementById('theForm');
//    theForm.addEventListener("submit",function(e){
//        if(!calculateMembership()){
//            // Prevent to upload the page
//            e.preventDefault();
//        }
//    });
//}

// End of init() function.

// Assign an event listener to the window's load event:
//window.onload = init;
