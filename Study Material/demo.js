
function calculater( num1, num2, operator){
    if(operator === "+"){
        return  num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else  if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1 / num2;
    }else{
        return `Invalid Input`
    }
}
const r1=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter a First Number :",(num1)=>{
    r1.question("Enter a Second Number :",(num2)=>{
        r1.question("Enter a operator :",(operator)=>{
            const val=calculater(num1,num2,operator);
            console.log(`The Result is : ${val}`);
            r1.close();
        });
    });
});