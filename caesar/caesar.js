function caesar(){
	desp = 1;
	alfa = "abcdefghijklmnopqrstuvwxyz";
	alfa+=alfa.toUpperCase();
	alfa+="1234567890";
	txt = document.getElementById("texto").value;
	tmp = "";
	for(var i=0;i<txt.length;i++){
		idx = alfa.indexOf(txt[i]) + desp
		if(idx >= alfa.length)
			idx = idx % alfa.length
		tmp+=alfa[idx]
	}
	alert(tmp);
}
