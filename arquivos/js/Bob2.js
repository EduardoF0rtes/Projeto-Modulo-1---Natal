function bob1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a.Bob irá pegar sua bicicleta já que o trânsito está bem intenso!\nb. Bob irá pedir ao seu vizinho uma carona de patinete pois ele não se lembra como chega no aeroporto"'   );
  
      if (question == "a") {
        window.location.href = "Bob3.html";
        break;
      } else if (question == "b") {
        window.location.href = "Fimdejogo.html";
        break;
      }
    }
  }