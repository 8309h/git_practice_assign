/// program for check  whether the given number is prime or not.

function checkprime(num){


  let factors =0;
  for(let i=0;i<=num;i++){
     if(num%i==0){
      factors++;
    }
      }if(factors ==2){
      console.log(num,"is a prime");
    }else{
      console.log(num,"is not prime");
}
}
checkprime(120); 