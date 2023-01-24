var number=parseInt(prompt("Enter the number"));
var seperate;
var answer=0;

while(number!=0){
	seperate=number%10;
	number=(number-seperate)/10;
	if(seperate%2!=0){
		answer+=seperate;
	}
}
document.write(answer);