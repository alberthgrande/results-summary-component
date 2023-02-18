let list = document.querySelectorAll("li");
let myResult = document.querySelector(".my-result");
let totalScore = 0;
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    let i = 0;
    list.forEach((e) => {
      e.firstElementChild.firstElementChild.src = json[i].icon;
      e.firstElementChild.lastElementChild.textContent = json[i].category;
      e.lastElementChild.firstElementChild.textContent = json[i].score;
      totalScore += json[i].score;
      i++;
    });
    myResult.innerHTML = Math.round(totalScore / 4);
  });
