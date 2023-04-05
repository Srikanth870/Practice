asyncFun()
console.log('hello')
for(i=0;i<=1000;i++){
    console.log('running for loop')
}
const asyncFun =()=>{
    console.log('inside async');
    setTimeout(()=>{
        console.log('setTime out func')
    },1000)
}

