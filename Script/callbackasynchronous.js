// Callback Asynchronous

function task1(callBack) {
    setTimeout(function () {
      console.log(1);
    }, 500);
    callBack();
  }
  
  function task2() {
    console.log(2);
  }
  
  task1(task2);