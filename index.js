// Firebase Config
 const firebaseConfig = {
    apiKey: "AIzaSyDrhZBeS-NGU1qInbywmjJ8mI7dnyBtZ0g",
    authDomain: "dhurudheekshitha-pvt-ltd.firebaseapp.com",
    projectId: "dhurudheekshitha-pvt-ltd",
    storageBucket: "dhurudheekshitha-pvt-ltd.firebasestorage.app",
    messagingSenderId: "420677745557",
    appId: "1:420677745557:web:babb1eb96c42856bb0149c"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database references
var contactFormDB = firebase.database().ref("contactForm");
var resumeFormDB = firebase.database().ref("resumeForm");

document.addEventListener("DOMContentLoaded", function(){

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if(contactForm){
contactForm.addEventListener("submit", function(e){

e.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var phone = getElementVal("phone");
var service = getElementVal("service");
var message = getElementVal("message");

saveMessage(name,email,phone,service,message);

alert("Message Sent Successfully!");

contactForm.reset();

});
}

function saveMessage(name,email,phone,service,message){

var newContact = contactFormDB.push();

newContact.set({
name:name,
email:email,
phone:phone,
service:service,
message:message
});

}


// ================= RESUME FORM =================

const resumeForm = document.getElementById("resumeForm");

if(resumeForm){
resumeForm.addEventListener("submit", function(e){

e.preventDefault();

var Name = getElementVal("Name");
var Phone = getElementVal("Phone");
var Email = getElementVal("Email");
var City = getElementVal("City");
var Subject = getElementVal("Subject");

saveResume(Name,Phone,Email,City,Subject);

alert("Resume Submitted Successfully!");

resumeForm.reset();

});
}

function saveResume(Name,Phone,Email,City,Subject){

var newResume = resumeFormDB.push();

newResume.set({
Name: Name,
Phone: Phone,
Email: Email,
City: City,
Subject: Subject
});

}



// ================= COMMON FUNCTION =================

function getElementVal(id){
return document.getElementById(id).value;
}

});


// ================= MATH =================

let num1 = Math.floor(Math.random()*20);
let num2 = Math.floor(Math.random()*20);

let mathQ = document.getElementById("mathQuestion");

if(mathQ){
mathQ.innerText = "Add Two Values " + num1 + " + " + num2 + " = ?";
}


// ================= HERO SLIDER =================

let slides = document.querySelectorAll(".slide");

if(slides.length > 0){

let index = 0;

function slider(){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(slider,3000);

}


// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 100;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCount,20);
}
else{
counter.innerText = target + "+";
}

};

updateCount();

});


// ================= FAQ =================

let faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq)=>{
faq.addEventListener("click",()=>{

let answer = faq.nextElementSibling;
let icon = faq.querySelector(".icon");

if(answer.style.display === "block"){
answer.style.display="none";
icon.innerHTML="+";
}
else{
answer.style.display="block";
icon.innerHTML="-";
}

});
});

// ================= MENU =================

function toggleMenu(){
document.getElementById("navMenu").classList.toggle("active");
}


// ================= DETAILS =================

function toggleDetails(button){

let details = button.nextElementSibling;

if(details.style.display === "block"){
details.style.display = "none";
button.innerText = "More";
}
else{
details.style.display = "block";
button.innerText = "Less";
}

}