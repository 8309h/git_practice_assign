/// program for check  whether the given number is prime or not.

function checkprime(number){

 let factors =0;
  for(let i=0;i<=number;i++){
     if(number%i==0){
      factors++;

    }
      }if(factors ==2){
      console.log(number,"is a prime");
    }else{
 console.log(number,"is not prime");

}
}
checkprime(120); 