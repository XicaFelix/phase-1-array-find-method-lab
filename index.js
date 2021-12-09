const superbowlWin = (array)=> {
    const outcome = array.find(element=>element.result==='W')
    console.log(outcome);
    if (typeof outcome === 'undefined'){
        return outcome;
    } else{
        return outcome.year;
    }
    return outcome.year;
//     //switch (true) {
//         case outcome:
//             return array.year
//             break;
    
//         default:
//             return array.result = undefined;
//             break;
//     }
}