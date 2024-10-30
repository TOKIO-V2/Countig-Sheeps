



function countSheeps(list) {
    let sheepCount = 0; 
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] === true) {
            sheepCount++;
        }
    }
    
    if (sheepCount != 0) {
        return `There are ${sheepCount} sheep in total`;
    } if(sheepCount == 0 ){
        return `UPS!!! Wolfs eaten Sheeps`;
    }
}


//const prueba = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
//const prueba = [false, false, false];

//console.log(countSheeps(prueba)); 


