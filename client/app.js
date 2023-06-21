function insert() {
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
const received = async () => {
  try {
    const response = await fetch('http://localhost:8000/');
    
    if (response.ok) {
      const data = await response.json();
      console.log('Données reçues du serveur distant :', data);
    } else {
      console.log('Erreur lors de la récupération des données du serveur distant.');
    }
  } catch (error) {
    console.log('Une erreur s\'est produite :', error);
  }
}