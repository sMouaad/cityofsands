const lb = new WebSocket("ws://141.145.204.20:27000")
const playernames = document.querySelectorAll(".playername")
const rubycounts = document.querySelectorAll(".rubycount")
const playerheads = document.querySelectorAll(".player")
let counter = 0;
lb.addEventListener("message", (event) => {
    let data = event.data.split(" with ");
    if(counter===10) counter = 0;
    console.log(`counter = ${counter} & data is ${data} & eventdata is ${event.data}`)
    playerheads[counter].src = "https://mineskin.eu/avatar/"+data[0];
    playernames[counter].textContent = data[0];
    rubycounts[counter++].textContent = data[1];

  });
lb.onopen = (event) =>{
  lb.send("yo server")
}
  