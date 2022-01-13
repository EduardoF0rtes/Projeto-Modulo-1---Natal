function Kevin1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a. Kevin faz o cálculo do teorema de Pitagoras já que a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa \nb. Ele lembra quanto tempo ele demorou para chegar na fazenda da cidade e adicionou 30min para não ter perigo de perder o ônibus"'
      );
  
      if (question == "a") {
        window.location.href = "Fimdejogo.html";
        break;
      } else if (question == "b") {
        window.location.href = "Kevin3.html";
        break;
      }
    }
  }