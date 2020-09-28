// navigation
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("nav-open");
});

//popup
const btnone = document.querySelector(".course-btn-one");
const containerone = document.querySelector("#popone");
const containertwo = document.querySelector("#poptwo");
const btntwo = document.querySelector(".course-btn-two");
const btnoneclose = document.querySelector(".btn-one-close");
const btntwoclose = document.querySelector(".btn-two-close");

btnone.addEventListener("click", () => {
  containerone.classList.add("one-active");
});
btnoneclose.addEventListener("click", () => {
  containerone.classList.remove("one-active");
});
btntwo.addEventListener("click", () => {
  containertwo.classList.add("two-active");
});
btntwoclose.addEventListener("click", () => {
  containertwo.classList.remove("two-active");
});

//pic popup

const openbtn = document.querySelector(".pic-read-button");
const closebtn = document.querySelector(".pic-pop-button");
const picpop = document.querySelector(".pic-popup");

openbtn.addEventListener("click", () => {
    picpop.classList.add("pop-active");
});
closebtn.addEventListener("click", () => {
  picpop.classList.remove("pop-active");
});

//form
 $("#submit-form").submit((e) => {
   e.preventDefault();
   $.ajax({
     url:
       "https://script.google.com/macros/s/AKfycbzywpVQIXb4UzboDmL0XW0s0gaY5SfXSt86W4MnLyvREra6wgs/exec",
     data: $("#submit-form").serialize(),
     method: "post",
     success: function (response) {
       alert("Form submitted successfully");
       window.location.reload();
       //window.location.href="https://google.com"
     },
     error: function (err) {
       alert("Something Error");
     },
   });
 });