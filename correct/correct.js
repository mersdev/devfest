let congrats = [
  "Awesome job! You nailed it! 😎",
  "Ace! You've conquered this topic!💪",
  "Bravo! Answered correctly! 👍",
  "Wow! That's the right answer! 👍🏻",
  "Superstar! You're a quiz pro! 🤓",
  "High five! You've nailed this one! 🖐️",
];

window.onload = initiate();

function initiate() {
  getQuizLength();
  pickCorrectQuotes();
  getNextQuestionLink();
}

function pickCorrectQuotes() {
  const randomQuoteIndex = Math.floor(Math.random() * 5);
  const randomGIFIndex = Math.floor(Math.random() * 5);
  document.getElementsByClassName("quote")[0].innerHTML =
    congrats[randomQuoteIndex];
  document.getElementById("gif").src =
    "../common/pic/gif/correct/" + randomGIFIndex + ".gif";
}

function getNextQuestionLink() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  let quiz = url.searchParams.get("quiz");
  let quiz_id = parseInt(url.searchParams.get("id")) + 1;
  console.log("Quiz: " + quiz + "| Question: " + quiz_id);
  if (getCookie() == null) {
    getQuizLength();
  } else if (getCookie() < quiz_id) {
    document.getElementsByClassName("next")[0].href = "../menu/index.html";
    document.getElementsByClassName("quote")[0].innerHTML =
      "Great job finishing! 🎉";
    document.getElementById("gif").src = "../common/pic/gif/complete.gif";
    document.getElementsByClassName("next")[0].innerHTML = "Back to Main Menu";
  } else {
    document.getElementsByClassName("next")[0].href =
      "../quiz/index.html?quiz=" + quiz + "&id=" + quiz_id;
  }
}

function getQuizLength() {
  // Define the API URL
  const apiUrl = "http://localhost:3000/animal-kingdom/";

  // Make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setCookie("length", data.length, 1);
      console.log(getCookie("length"));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
