function vige(){
	alfa = "abcdefghijklmnopqrstuvwxyz";
	alfa+=alfa.toUpperCase();
	alfa+="1234567890";
	txt = document.getElementById("texto").value;
	key = document.getElementById("key").value;
	alert(txt.length);
	alert(key.length);
	tmp = "";
	for(var i=0;i<txt.length;i++){
		desp = alfa.indexOf(key[i%key.length]);
		idx = alfa.indexOf(txt[i]) + desp
		if(idx >= alfa.length)
			idx = idx % alfa.length
		tmp+=alfa[idx]
	}
	alert(tmp);
}
