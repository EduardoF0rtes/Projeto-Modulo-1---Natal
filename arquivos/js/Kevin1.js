function Kevin1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a.Kevin tenta entrar em contato com uma agência de ônibus para comprar uma passagem antes que não de mais tempo\n b. Kevin está no momento jogando futebol e pensa que pode resolver esse problema mais tarde"'
      );
  
      if (question == "a") {
        window.location.href = "Kevin2.html";
        break;
      } else if (question == "b") {
        window.location.href = "Fimdejogo.html";
        break;
      }
    }
  }