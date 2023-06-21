function myFunction() {
  let inputValue = document.getElementById("myInput").value;
  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValue),
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
}
