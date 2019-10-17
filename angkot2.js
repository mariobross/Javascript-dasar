var no = 1;
var jumAngkot = 10;
var angkotBeroperasi= 6;
while(no <=angkotBeroperasi){
    console.log('Angkot no '+ no +' beroperasi dengan baik');
no++;
}

//pengulangan menggunakan for

for(no = angkotBeroperasi + 1; no <= jumAngkot; no++){
    console.log('Angkot No. '+ no + ' tidak beroperasi');
}