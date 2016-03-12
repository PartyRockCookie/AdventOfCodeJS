var input = $('pre').innerText, floorNum = 0, pos = 0;

for(var i = 0;i<input.length;i++){
	if(input[i] === '('){
		floorNum++;
	}else{
		floorNum--;
	}
	pos++;
	if(floorNum == -1)
		break;
}

console.log(pos);