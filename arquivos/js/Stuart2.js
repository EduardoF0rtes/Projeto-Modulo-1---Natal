function Stuart1() {
    while (question != "a" || question != "b") {
      var question = prompt(
        'a.Stuart irá enfrente seu medo e aprender a lidar com o fogo com toda a segurança para poder ajudar sua mãe nessa tarefa tão importante.\nb. Stuart informa sua mãe que infelizmente ele não vou poder ajudar pois não quer enfrentar seu medo de fogo."'
      );
  
      if (question == "a") {
        window.location.href = "Stuart3.html";
        break;
      } else if (question == "b") {
        window.location.href = "Fimdejogo.html";
        break;
      }
    }
  }