let variableName ="small medium large" 
let x = variableName.replace(/\small/g , 'word').replace(/\medium/g , 'word').replace(/\large/g , 'word').replace(/\x_large/g , 'word');
console.log(x)
