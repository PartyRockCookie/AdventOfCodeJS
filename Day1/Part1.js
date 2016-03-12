var input = $('pre').innerText, floorNum = 0;

for(var i = 0;i<input.length;i++){
	if(input[i] === '('){
		floorNum++;
	}else{
		floorNum--;
	}
}

console.log(floorNum);