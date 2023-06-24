function inscription() {
    // Récupérer les valeurs des champs de saisie
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const postData = {
        nom: nom,
        prenom: prenom,
        email: email,
        password: password
      };
      console.log(postData)
    fetch("http://localhost:8000/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  }