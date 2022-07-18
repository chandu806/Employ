// [17:04] Amarnath Reddy
// Write a program to find second largest number in given array. [89,90,67,56,90,92] 
// Write a program to count number of characters in sequence in given string
//  and return output as followsOnly increase the count of alphabets in the 
//  stringIf you encounter any digit or alpha numeric character, do not alter 
//  it Sample Output - 1:AabbBcbbd - a2b3c1b2d1 aa11b - a211b1Ab&& - a1b1&& 



//  Given an integer n,

//   write program to print following pattern N = 5: 12 34 5 67 8 9 1011 12 13 14 15 Consider following use case: A company has multiple departments. each department has N number of employees. Each Employee has their saving account in which a fixed salary is credited. Construct a relational table schema of above given use case and write MySQL queries for following: Get no of employees for each departmentGet employee with maximum salary for each departmentGet employee with second maximum salary in entire company  
// s
// You can mail the programs to 
// amarnathreddy@truequations.com
// pallavigedala@truequations.com

var arr = [89,90,67,56,90,92]
var b=arr[0]
for(var i=0;i<b-1;i++){
    for(var j=0;j<b-i-1;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr[arr.length-2])
// *******2

var arr=["a","b","c","d","e","a","b"]
var obj={}
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]++;
    }
}
console.log(obj)

//////********  write program to print following pattern N = 5         */

var n=5;
var arr=[
    1,2,3,4,5,6,7,8,9,10
]
var s=0
var diff=Math.abs(arr[1]-arr[0])
// console.log(diff)
for(var i=0;i<arr.length;i++){
    var diff1=Math.abs(arr[i]-arr[i+1])
    if(diff<diff1){
        diff=diff1
    }
}
var print=arr[arr.length-1]
// console.log(print)
for(var i=1;i<=5;i++){
    console.log(print+diff)
    diff++
}

