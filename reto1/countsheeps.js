const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]
function contarOvejas(ovejas) {
    const filterColor= ovejas.filter(
        colorOvejas => colorOvejas.color == "rojo" && colorOvejas.name.toLowerCase().indexOf("a") > -1 && colorOvejas.name.toLowerCase().indexOf("n") > -1
    );
    return filterColor
  }

  const ovejasFiltradas = contarOvejas(ovejas);
  console.log(ovejasFiltradas);

  //const countSheeps = (letterA, letterB, colors) =>{
//    const filterColor= sheeps.filter(
//       colorSheep => colorSheep.color == colors && colorSheep.name.toLowerCase().indexOf(letterA) > -1 && colorSheep.name.toLowerCase().indexOf(letterB) > -1
//        );
//    return(filterColor);
//}
