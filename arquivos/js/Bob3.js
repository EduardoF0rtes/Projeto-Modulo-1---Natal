function bob1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a.Bob pensa que como todos seus irmão são iguais eles nem vão perceber a diferença e resolve arriscar já que não tem tempo hábil para voltar a sua casa \nb. Bob tenta conversar com os agentes do aeropoto explicando que ele se confundiu com o documento mas ele não pode perder o voo por causa do Natal da família Minions"'
      );
  
      if (question == "a") {
        window.location.href = "venceu.html";
        break;
      } else if (question == "b") {
        window.location.href = "Fimdejogo.html";
        break;
      }
    }
  }