let Roberto = prompt("Dinero roberto"); //1.5
let pedro = prompt("dinero de pedrito"); //1.7
let cofla = prompt("dinero cofla"); //3

//palito de agua 0.6
//palito de crema 1
//bombon heladic 1.6
//bombon heladovich 1.7
//bombon helardo 1.8
//potesito con confeti 2.9
//pote de un cuarto de kilo 2.9

if (Roberto >= 0.6 && Roberto < 1) {
  alert("compre el palito de agua perro");
  alert("le sobra " + (1.5 - Roberto));
} else if (Roberto >= 1 && Roberto < 1.6) {
  alert("compre el palito de crema");
} else if (Roberto >= 1.6 && Roberto < 1.7) {
  alert("compre el heladic");
} else if (Roberto >= 1.7 && Roberto < 1.8) {
  alert("compre el helardo");
} else if (Roberto >= 1.8 && Roberto < 2.9) {
  alert("compre el potesito con cofeti");
} else if (Roberto >= 2.9 && Roberto == 3) {
  alert("compre potesito o cuarto de kilo");
} 
else{
    alert("largo");
}

if (pedro >= 0.6 && pedro < 1) {
  alert("compre el palito de agua perro");
  alert("le sobra " + (1.5 - pedro));
} else if (pedro >= 1 && pedro < 1.6) {
  alert("compre el palito de crema");
} else if (pedro >= 1.6 && pedro < 1.7) {
  alert("compre el heladic");
} else if (pedro >= 1.7 && pedro < 1.8) {
  alert("compre el helardo");
} else if (pedro >= 1.8 && pedro < 2.9) {
  alert("compre el potesito con cofeti");
} else if (pedro >= 2.9 && pedro == 3) {
  alert("compre potesito o cuarto de kilo");
}
else{
    alert("largo perro");
}