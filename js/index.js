/////// Class Manipulation ///////

// document.querySelector("h1").style.color = "red";
$("h1").css("color", "red");

// document.querySelector("h1").classList.add("bigTitle", "margin50");
$("h1").addClass("bigTitle margin50");

// document.querySelector("h1").classList.remove("bigTitle");
$("h1").removeClass("bigTitle");

// console.log("has class margin50 : " + document.querySelector("h1").classList.contains("margin50"));
console.log("has class margin50 : " + $("h1").hasClass("margin50"));

/////// Text Manipulation ///////
//

// document.querySelector("h1").textContent = "Good by France";
$("h1").text("Good by France");

// document.querySelectorAll("button").forEach(button => button.textContent = "dont click!");
$("button").text("dont click !");

// document.querySelectorAll("button").forEach(button => button.innerHTML= "<em>dont click!</em>");
$("button").html("<em>dont click!</em>");

/////// Atribute Manipulation ///////
//

// console.log(document.querySelector("img").getAttribute("src"));
console.log($("img").attr("src"));

// document.querySelectorAll("a").forEach(link => link.setAttribute("href", "http://yahoo.com"));
// document.querySelector("a").setAttribute("href", "http://yahoo.com");
$("a").attr("href", "http://yahoo.com");

/////// Event listner ///////
//

// document.querySelector("h1").addEventListener("click", (e) => {
//     if (e.target.style.color !== "black") {
//       e.target.style.color = "black";
//     } else {
//       e.target.style.color = "red";
//     }
// });
$("h1").click((e) => {
  if ($(e.target).css("color") !== "rgb(0, 0, 0)") {
    $(e.target).css("color", "black");
  } else {
    $(e.target).css("color", "purple");
  }
});

/////// multiple Event listner ///////

// foreach version
//
// document.querySelectorAll("button").forEach((button) =>
//   button.addEventListener("click", () => {
//     document.querySelector("h1").style.color = "yellow";
//   })
// );

// for version

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", (e) => {
//         document.querySelector("h1").style.color = "green";
//     });
// }

$("button").click(() => {
  if ($("h1").css("color") === "rgb(255, 255, 0)") {
    $("h1").css("color", "red");
  } else {
    $("h1").css("color", "rgb(255, 255, 0)");
  }
});

/////// key Event listner ///////

// document.querySelectorAll("input").forEach((input) => {
//   input.addEventListener("keypress", (e) => {
//     console.log(e.key);
//   });
// });

$("input").keypress((e) => {
  console.log(e.key);
});

// document.addEventListener("keypress", function(e) {
//     document.querySelector("h1").textContent = e.key;
// });

$(document).keypress((e) => {
  $("h1").text(e.key);
});

// document.querySelector("h1").addEventListener("mouseover", function() {
//     document.querySelector("h1").style.color = "blue";
// });

$("h1").on("mouseover", () => {
  $("h1").css("color", "blue");
});

/////// adding and removing elements ///////

// document.querySelector("h1").insertAdjacentHTML("beforebegin", "<button>new</button>");
$("h1").before("<button>new</button>");

// document.querySelectorAll("button").forEach((button) => {
//   button.remove();
// });

// $("button").remove();

/////// annimation ///////

// document.querySelector(".btn").addEventListener("click", function () {
//   document.querySelector("h1").style.display =
//     document.querySelector("h1").style.display === "none" ? "block" : "none"; // ternary operator
// });

$(".btn").on("click", () => {
  $("h1").toggle();
});

// document.querySelector(".btn2").addEventListener("click", function () {
//   document.querySelector("h1").classList.toggle("fade");
// });

$(".btn2").on("click", () => {
  $("h1").fadeToggle();
});

// document.querySelector(".btn3").addEventListener("click", function() {
//     document.querySelector("h1").classList.toggle("slide");
// });

$(".btn3").on("click", () => {
  $("h1").slideToggle();
});

// document.querySelector(".btn4").addEventListener("click", () => {
//   document.querySelector("h1").style.opacity = "0.5";
// });

$(".btn4").on("click", () => {
  $("h1").animate({ opacity: 0.5 }); // seulement des valeurs numérique
});


$(".btn5").on("click", () => {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
