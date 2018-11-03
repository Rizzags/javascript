function panggilshit(){
	var kota = ['jakarta','bandung', 'semarang', 'makasar'];
  console.log(kota);
  console.log("===============");
	var kota2 = kota.shift();
	console.log(kota2)
	return kota
}

console.log(panggilshit())
