function getTeacherInfo() {
  // Define the API URL
  const apiUrl = "http://localhost:3000/teacher";

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

window.onload = getTeacherInfo();
