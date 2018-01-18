// function sum() {
//     return Array.prototype.reduce.call(arguments, function(a, b) {
//         return a + b / 2 ;
//     }, 0);
// }




//______________________ 2 _____________________
//Write a function that prints all the numbers from 1 to 100; if a 
//number is divisible by 7 add the line 'this is divisible by 7'.


// function seven(){
// 	for (var i = 1; i <= 100; i++){
// 		if (i % 7){
// 			console.log(i);
// 		}else {
// 			console.log(i + ' This is divisible by 7')
// 		}
// 	}
// }

//______________________ 3 _____________________

let button = document.getElementById('button')
let div1 = document.getElementById('div')
let div2 = document.getElementById('div2')


button.addEventListener('click', function(){
	document.getElementById("div1").style.width = "300px";
	document.getElementById("div1").style.height = "200px";
	document.getElementById("div2").style.backgroundColor = "orange";
	document.getElementById("div2").style.borderRadius = "20px";
	document.getElementById("div2").style.width = "50px";
	document.getElementById("div2").style.height = "100px";
})