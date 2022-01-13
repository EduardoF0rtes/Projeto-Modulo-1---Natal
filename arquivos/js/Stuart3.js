function Stuart1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a. Stuart como um bom curioso procurou no youtube como concertar seu machado já que ele aprende muito nesses vídeos.  \nb. Stuart acha que não irá precisar do machado pra pegar lenha pois acredita que consegue cortar a lenha até nos dentes se for necessário."'
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