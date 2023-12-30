let playerSymbol = <img src= "https://postimg.cc/ft4MBggS"/>;
let playerSymbol = "TK.png";

let gameEnded = false

for (let i = 1; i <= 9; i++) {
document.getElementById(i.toString()).addEvenListener(
 "click",
  function() {
  }
 );
}
if (this.innerHTML == "" && !gameEnded) {
	this.innerHTML = playerSymbol;
	}
this.classList.add(playerSymbol.toLowerCase());

if (playerSymbol === "CB.png")
  playerSymbol = "TK.png"
 else
	playerSymbol = "CB.png"
