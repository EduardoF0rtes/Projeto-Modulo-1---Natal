function bob1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a. Ligar para sua mãe para ver se ela sabe onde se encontra \nb. Procurar na sua mala da última viagem, pois ele sempre esquece onde guardou as coisas?"'
      );
  
      if (question == "a") {
        window.location.href = "Bob2.html";
        break;
      } else if (question == "b") {
        window.location.href = "Fimdejogo.html";
        break;
      }
    }
  }