//menangkap pilihan player
var player = prompt('silahkan pilih : Gajah, Semut, Orang')
//menangkap pilihan CPU
var cpu = Math.random();
//menentukan random pilihan untuk CPU
if(cpu < 0.34){
    cpu = "gajah";
}else if(cpu >= 0.34 && cpu < 0.67){
    cpu = "orang";
}else{
    cpu = "semut"
}
// console.log(cpu);
// menentukan rules
var hasil = '';
if(player == cpu){
    hasil = 'SERI'
}else if(player == "gajah"){
    // if(cpu == 'orang'){
    //     hasil = 'KALAH';
    // }else{
    //     hasil='MENANG';
    // }
    //singkatan dari if dan else di atas dengan if ternery
    hasil = cpu == 'orang' ? 'MENANG' : 'KALAH';
}else if(player == 'semut'){
    hasil = cpu == 'gajah' ? 'MENANG' : 'KALAH'; 
}else if(player == 'orang'){
    hasil = cpu == 'gajah' ? 'KALAH' : 'MENANG'; 
}else{
    alert('Anda Memasukan Inputan yang Salah');
    
}

// tampilkan hasilnya dari game ini

alert('Kamu Memilih: ' + player +' dan Computer Memilih: '+ cpu +'\nMaka Hasilnya KAMU: '+ hasil);