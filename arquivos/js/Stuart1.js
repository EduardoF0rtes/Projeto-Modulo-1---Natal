function Stuart1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a.Como ele acha que consegue aprender todas as receitas na hora ele vai deixar para preparar tudo no dia do natal.\nb. Como Stuart é tecnológico ele decide procurar por receitas no youtube para tentar definir qual a melhor receita."'
      );
  
      if (question == "a") {
        window.location.href = "Fimdejogo.html";
        break;
      } else if (question == "b") {
        window.location.href = "Stuart2.html";
        break;
      }
    }
  }