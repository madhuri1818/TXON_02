let out = document.getElementById("display");
let arr = document.querySelectorAll("button");
let dis = "";
for (it of arr) {
  it.addEventListener("click", (e) => {
   // buttonText = e.target.innerText;
    if (e.target.innerText == "C") {
      dis = "";
      out.value =dis;
    } else if (e.target.innerText == "=") {
        dis = eval(dis);
      out.value = dis;
    } else {
      dis =dis+ e.target.innerText;
      out.value = dis;
    }
  });
}
