export function daniel() {
  const btn = document.getElementById("bruh");
  const mp3 = new Audio("https://www.myinstants.com/media/sounds/movie_1.mp3");
  mp3.volume = 0.1;
  let counter = 0;
  let click = true;
  btn.classList.remove("cursor-wait");

  btn.onclick = () => {
    if (click) {
      click = false;
      btn.classList.add("cursor-wait");
      mp3.play();
      counter++;

      // cuz daniel
      if (!btn.innerText.length) {
        btn.insertAdjacentHTML(
          "beforeend",
          '<p id="counter">' + counter + "</p>"
        );
      } else {
        document.getElementById("counter").innerText = counter;
      }

      switch (counter) {
        case 10:
          window.alert("Hallo Daniel ;)");
          break;
        case 11:
          window.alert("Uff, was ist falsch bei dir?");
          break;
        case 12:
          window.alert("Okay. Das wars, such dir endlich ein neues Hobby :S");
          break;
        case 20:
          window.alert("HÖR AUF");
          break;
        case 21:
          window.alert("Wenn du nicht aufhörst ...");
          break;
        case 22:
          window.alert("... dann setze ich den Counter zurück!");
          break;
        case 25:
          window.alert("Du glaubst mir wohl nicht???");
          break;
        case 26:
          window.alert(
            "Sobald ich die Einstellung zum zurücksetzen implementiert habe wirst du schon sehen!"
          );
          break;
        case 30:
          window.alert("Bitte hör auf :(");
          break;
        case 35:
          window.alert("Ich flehe dich an :I");
          break;
        case 50:
          window.alert(
            "Es wird echt peinlich, du hast schon 50x auf einem dummen Button geklickt der einfach nur einen Sound abspielt."
          );
          break;
        case 51:
          window.alert("Dude du hast schon fast eine Minute verschwendet!");
          break;
      }

      setTimeout(function () {
        click = true;
        btn.classList.remove("cursor-wait");
      }, 800);
    }
  };
}
