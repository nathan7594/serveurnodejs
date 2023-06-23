function insert() {
  const inputValue = document.getElementById("myInput").value;
  const postData = {
    value : inputValue}
  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData)
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
}
// function insert(){
//   const url = "http://localhost:8000/";
//   let inputValue = document.getElementById("myInput").value;
//   const postData = {inputValue}
  
//   let request = new Request(url, {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: new Headers()
//   });
  
//   fetch(request)
// }

const received = async () => {
  try {
    const response = await fetch('http://localhost:8000/');
    
    if (response.ok) {
      const data = await response.json();
      console.log('Données reçues du serveur distant :', data);
      const container = document.getElementById("texte")

      data.forEach((phrase, index) => {
        console.log(`Phrase ${index + 1}: ${phrase.texte}`);
        container.innerHTML = phrase.texte
      })
    } else {
      console.log('Erreur lors de la récupération des données du serveur distant.');
    }
  } catch (error) {
    console.log('Une erreur s\'est produite :', error);
  }
}