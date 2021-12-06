superBowlWin = (array)=> {
    let outcome = array.find(array.result ==='W')
    switch (outcome) {
        case true:
            return array.year
            break;
    
        default:
            return undefined;
            break;
    }
}