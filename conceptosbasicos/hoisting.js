var opc1="piedra";
var opc2="papel";
var opc3="tijera";

var resultado= function(usuario,pc){
    if (usuario != pc){
        if (usuario== opc1 && pc== opc3){
            console.log("el usuario gano con " + opc1)
        }else if (usuario== opc2 && pc== opc1){
            console.log("el usuario gano con " +opc2)
        }else if(usuario== opc3 && pc== opc2){
            console.log("el usuario gano con " + opc3)
        }else {
            console.log("gano el pc")
        }   
     }else if(usuario==pc){
         console.log("empate")
     }
};

resultado(opc1,opc3)