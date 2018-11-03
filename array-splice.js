function panggilsplice() {

	var kota = ['jakarta','bandung', 'semarang', 'makasar'];
	console.log(kota)
	kota.splice('2',1,'palembang')
	return kota
}

console.log(panggilsplice())