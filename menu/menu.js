function createCard(data) {
  console.log(data);
  let quiz_name = data.quiz.replace("-", " ");
  let menu = document.getElementsByClassName("menu-items")[0];
  let card_div = document.createElement("div");
  card_div.className = "col-xl-4 col-md-6 col-12";
  menu.appendChild(card_div);
  let card = document.createElement("div");
  card.className = "card mb-2 mb-md-2 h-100";
  card_div.appendChild(card);
  let card_image = document.createElement("img");
  card_image.src = "../common/pic/quiz/" + data.quiz + ".jpeg";
  card_image.className = "card-img-top w-100";
  card_image.style = "object-fit: cover";
  card_image.alt = "menu-icon";
  card.appendChild(card_image);
  let card_body = document.createElement("card-body");
  card_body.className = "card-body";
  card.appendChild(card_body);
  let card_title = document.createElement("h5");
  card_title.className = "card-title display-5 fw-bold text-center";
  card_title.style = "text-transform: capitalize";
  card_title.innerHTML = quiz_name;
  card_body.appendChild(card_title);
  let card_text = document.createElement("p");
  card_text.className = "card-text text-center";
  card_text.innerHTML = data.description;
  card_body.appendChild(card_text);
  let card_row = document.createElement("div");
  card_row.className = "d-flex justify-content-center";
  card_body.append(card_row);
  let card_row_teacher = document.createElement("p");
  card_row_teacher.className = "card-text text-center px-2";
  card_row_teacher.innerHTML =
    "&#129489;&#127996;&#8205;&#127979; " + data.teacher;
  card_row.appendChild(card_row_teacher);
  let card_row_date = document.createElement("div");
  card_row_date.className = "card-text text-center px-2";
  card_row_date.innerHTML = "&#128197; " + data.due;
  card_row.appendChild(card_row_date);
  let button_div = document.createElement("div");
  button_div.className = "d-grid";
  card_body.appendChild(button_div);
  let anchor = document.createElement("a");
  anchor.className = "btn btn-primary";
  anchor.innerHTML = "Start the Quiz Now!";
  anchor.href = "../quiz/index.html?name=animal-kingdom&id=1";
  button_div.appendChild(anchor);
}

function initiate() {
  getStudentInfo();
  getQuizHeaderInfo();
  setCookie("index", "empty", 1);
  for (let index = 1; index < 4; index++) {
    getQuizCardInfo(index);
  }
}

function getStudentInfo() {
  let studName = getCookie("student");
  // Define the API URL
  const apiUrl = "http://localhost:3000/student?name=" + studName;

  // Make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("gender").src =
        "../common/pic/" + data[0].gender + ".png";
      document.getElementsByClassName("name")[0].innerHTML = data[0].name;
      document.getElementsByClassName("name")[1].innerHTML = data[0].name;
      document.getElementsByClassName("class")[0].innerHTML = data[0].class;
      document.getElementsByClassName("class")[1].innerHTML = data[0].class;
      document.getElementsByClassName("teacher")[0].innerHTML = data[0].teacher;
      document.getElementsByClassName("teacher")[1].innerHTML = data[0].teacher;
      setCookie("teacher", data[0].teacher, 1);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getQuizHeaderInfo() {
  // Define the API URL
  const apiUrl = "http://localhost:3000/quiz/1";

  // Make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let quiz_name = data.quiz.replace("-", " ");
      document.getElementsByClassName("quiz-name")[0].innerHTML = quiz_name;
      document.getElementsByClassName("quiz-name")[0].style =
        "text-transform: capitalize";
      document.getElementsByClassName("quiz-due")[0].innerHTML = data.due;
      document.getElementsByClassName("quiz-name")[1].innerHTML = quiz_name;
      document.getElementsByClassName("quiz-name")[1].style =
        "text-transform: capitalize";
      document.getElementsByClassName("quiz-due")[1].innerHTML = data.due;
      document.getElementsByClassName("quiz-button")[0].href =
        "../quiz/index.html?name=animal-kingdom&id=1";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getQuizCardInfo(index) {
  // Define the API URL
  const apiUrl = "http://localhost:3000/quiz/" + index;

  // Make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      createCard(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

window.onload = initiate();
