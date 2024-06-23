interface cell {
    isDisplayed: Boolean;
    hasAMine: Boolean;
    clue: Number;
}

// type cell = {
//     isDisplayed: Boolean;
//     hasAMine: Boolean;
//     clue: Number;
// }

type gridCell = cell[];

function add(numbers: string): number{
    let result: number = 0;
    let numArr = numbers.trim().split(",").map(n => parseInt(n));

    for (let n of numArr){
        result += n;        
    }

    return result;
}
 

function addFunc(numbers: string): number {
    let integers = numbers.trim().split(',').map(x => parseInt(x));
    console.log(integers);
    
    let negatives = integers.filter(x => x < 0);
    console.log(negatives);
    

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    let filterInt = integers.filter(x => x <= 1000);
    console.log(filterInt);

    let reduceInt = filterInt.reduce((a,b) => a + b, 0);
    console.log(reduceInt);
     return reduceInt;

        
    // return integers
    //     .filter(x => x <= 1000)
    //     .reduce((a, b) => a + b, 0);
}

let result = add('1, 2,4,5');
console.log(result);

console.log(add("12,34,561,273"));

console.log(addFunc("-1, 2, -3,4,5"));

