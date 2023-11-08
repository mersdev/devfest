function createCard() {
  let menu = document.getElementsByClassName("menu-items")[0];
  let card_div = document.createElement("div");
  card_div.className = "col-xl-4 col-md-6 col-12";
  menu.appendChild(card_div);
  let card = document.createElement("div");
  card.className = "card d-flex align-items-center mb-2 mb-md-2";
  card_div.appendChild(card);
  let card_image = document.createElement("img");
  card_image.src = "../common/pic/lion.png";
  card_image.className = "card-img-top w-50 p-3";
  card_image.alt = "menu-icon";
  card.appendChild(card_image);
  let card_body = document.createElement("card-body");
  card_body.className = "card-body";
  card.appendChild(card_body);
  let card_title = document.createElement("h5");
  card_title.className = "card-title display-5 fw-bold text-center";
  card_title.innerHTML = "Animal Kingdom";
  card_body.appendChild(card_title);
  let card_text = document.createElement("p");
  card_text.className = "card-text text-center";
  card_text.innerHTML =
    "<b>Journey through the animal kingdom with our interactive quiz! </b>";
  card_text.innerHTML +=
    "Identify animals from around the globe, expanding your knowledge of the natural world.";
  card_body.appendChild(card_text);
  let card_row = document.createElement("div");
  card_row.className = "d-flex justify-content-center";
  card_body.append(card_row);
  let card_row_teacher = document.createElement("p");
  card_row_teacher.className = "card-text text-center px-2";
  card_row_teacher.innerHTML = "&#129489;&#127996;&#8205;&#127979; Madam Kong";
  card_row.appendChild(card_row_teacher);
  let card_row_date = document.createElement("div");
  card_row_date.className = "card-text text-center px-2";
  card_row_date.innerHTML = "&#128197; 11-11-2023";
  card_row.appendChild(card_row_date);
  let button_div = document.createElement("div");
  button_div.className = "d-grid";
  card_body.appendChild(button_div);
  let button = document.createElement("button");
  button.className = "btn btn-primary";
  button.innerHTML = "Start the Quiz Now!";
  button.type = "button";
  button_div.appendChild(button);
}

function onload() {
  for (let index = 0; index < 5; index++) {
    createCard();
  }
}

window.onload = onload();
