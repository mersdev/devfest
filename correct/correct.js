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
  let quiz_id = getCookie("index");
  if (getCookie("length") == null) {
    getQuizLength();
  } else if (getCookie("length") == quiz_id) {
    getCookie("length");
    document.getElementsByClassName("next")[0].href = "../menu/index.html";
    document.getElementsByClassName("quote")[0].innerHTML =
      "Great job finishing! 🎉";
    document.getElementById("gif").src = "../common/pic/gif/complete.gif";
    document.getElementsByClassName("next")[0].innerHTML = "Back to Main Menu";
    setCookie("index", "empty", 1);
  } else {
    document.getElementsByClassName("next")[0].href = "../quiz/index.html";
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
      //console.log(getCookie("length"));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
