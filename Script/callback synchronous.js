// CALLBACK SYNCHRONOUS

function task1(callBack) {
    console.log(1);
    callBack()
}

function task2() {
    console.log(2);
}

task1(task2)