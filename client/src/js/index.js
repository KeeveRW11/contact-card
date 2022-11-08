//Import functions
import { initDb, getDb, postDb, } from "./database";
import { fetchCards } from "./cards"
import { toggleForm, clearForm } from "./form";

//This imports the javascript modules
import "./form";
// import "./submit";

//This imports the CSS
import "../css/index.css";

// Imports bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//imports images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';


window.addEventListener('load', function () {
    initDb();
    fetchCards();
    getDb();
    postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
})

// Form functionality
const form = document.getElementById("formToggle");
const newContactButton = document.getElementById("new-contact");
let submitBtnToUpdate = false;
let profileId;
  
newContactButton.addEventListener('click', event => {
    toggleForm()
})
  
form.addEventListener('submit', event => {
// Handle data
  event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;
  
    // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {
  
    fetchCards();
      // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }
  
  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
});