window.onload = getQuestion(1);
function getQuestion(id) {
  // Define the API URL
  const apiUrl = "http://localhost:3000/animal-kingdom/" + id;

  // Make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementsByClassName("question")[0].innerHTML = data.question;
      document.getElementsByClassName("answer")[0].innerHTML = data.answer;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
