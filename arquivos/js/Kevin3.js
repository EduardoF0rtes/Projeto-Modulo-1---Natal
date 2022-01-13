function Kevin1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a. Kevin foi pedir para ir na fileira 5 polotrona C pois era o único local que ele aceitava viajar.\nb. Kevin não se importava com lugar e aceitava ir ate no corredor do ônibus só para poder rever sua família no natal ?"'
      );
  
      if (question == "a") {
        window.location.href = "Fimdejogo.html";
        break;
      } else if (question == "b") {
        window.location.href = "venceu.html";
        break;
      }
    }
  }