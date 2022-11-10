// Complete a method that takes a boolean value and return a 'Yes' string for TRUE
// or a 'No' string for FALSE

// Declare  a function
function YesOrNo(boolVal){ 
    // Check if it is a boolean value
    if(boolVal){
        alert ('Yes')
    }else{
        alert('No') 
    }
 }
 YesOrNo(true)

                                    // Using IF...ELSE condition with strict equality operator
// function YesOrNo(boolVal){ 
//    if(boolVal === true){
//        alert ('Yes')
//    }else{
//        alert('No') 
//    }
// }
// YesOrNo(true)

                                    //Using Ternary Operator
// function YesOrNo(boolVal){ 
// console.log(boolVal? 'Yes' : 'No')
// }
// YesOrNo(true)


                                    // Using Arrow Function with Ternary Operator
// let boolToWord = bool => bool? 'Yes' : 'No'
// alert(boolToWord(false))
