// Code your solutions in this fire 



function writeCards(names, event){
    let array = []
  
     for (let i = 0; i < names.length; i++){
     array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
     }
     return array
}
  
function countDown(number){
     let i = 0
     while(i <10);{
    console.log(i++)
     }
}