// perulangan dengan FOR dan pengkondisian dengan IF,  ELSE IF dan ELSE
var jumlahAngkot = 10 ;
var angkotBeroperasi = 5;
var noAngkot=1;
var angkotLembur = 8;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++ ){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot no '+ noAngkot +' beroperasi dengan baik');
    }else if(noAngkot === angkotLembur){
        console.log('Angkot no '+ noAngkot +' Sedang Lembur');
    }
    else{
        console.log('Angkot No. '+ noAngkot + ' tidak beroperasi');
    }
    
}