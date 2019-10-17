// perulangan dengan FOR dan pengkondisian dengan IF dan ELSE
var jumlahAngkot = 10 ;
var angkotBeroperasi = 5;
var noAngkot=1
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++ ){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot no '+ noAngkot +' beroperasi dengan baik');
    }else{
        console.log('Angkot No. '+ noAngkot + ' tidak beroperasi');
    }
    
}