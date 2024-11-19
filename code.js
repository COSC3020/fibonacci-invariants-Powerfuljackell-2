function fib(n){
    sequence = new Array(n);
    if (n >= 0) sequence[0] = 0;//first part of invariant
    if (n >= 1) sequence[1] = 1;//second part of invariant
    fibCalcSingle(n,sequence);
    return sequence;
}

function fibCalcSingle(n, fibArray) {
    if(n < 2){
        return;
    }
    fibCalcSingle(n-1,fibArray);
    fibArray[n] = (fibArray[n-1]+fibArray[n-2]);
    return;
}