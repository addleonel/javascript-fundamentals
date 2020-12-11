let number = [23, 45, 75, 12, 78, 23];

i = 0;
sum1 = 0;
while(i < number.length){
    sum1 += number[i];
    i ++;
}

sum2 = 0;
for(let i = 0; i < number.length; i++){
    sum2 += number[i];
}

j = 0
sum3 = 0;
do{
    sum3 += number[j]
    j++;
}while(j < number.length);

console.log('The result is:', sum1);
console.log('The result is:', sum2);
console.log('The result is:', sum3);
