const button1 = document.getElementById("button1")
button1.addEventListener('click', (e) => button1.innerHTML++)
button1.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  button1.innerHTML = 0;
})

button1.addEventListener('onmouseover', (e) => document.getElementById("popup").innerText = "Right click to clear")

const input = document.getElementById("password")
input.oninput = (e) => {
  if (e.target.value.length < 5 ) {
    document.getElementById("warning").innerText = "Password too short";
  }
  else {
    document.getElementById("warning").innerText = "";
  }
}

input.addEventListener('blur', (e) => document.getElementById("warning").innerText = "")


// input.addEventListener('on', (e) => {
//   console.log('changed')
// })