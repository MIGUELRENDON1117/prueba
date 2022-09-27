// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }


const tipoDeSuscripcion = (basic) =>{
    if (basic == "free" ){
    console.log("solo puedes tomar los cursos gratis");
    return;
    };if (basic == "basic" ){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    };if (basic == "expert" ){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            return;
    }; if (basic == "expertPlus" ){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                return;
    }; if (basic!== "basic" && "free" && "expert" && "expertPlus"){
        console.log("error");
    }
    };
    
    tipoDeSuscripcion("expert");

