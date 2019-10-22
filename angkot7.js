//pengelolahan penumpang
var penumpang = [];
var tambahPenumpang = (namaPenumpang, penumpang) =>{
    // jika angkot kosong
    if(penumpang.length == 0){
        // tambah penumpang di awal
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang ke kursi yang kosong
                penumpang[i] = namaPenumpang
                // kembalikan isi array & keluar dari functtion
                return penumpang;
            }
            // jika nama penumpang sudah ada
            else if(penumpang[i] == namaPenumpang){
                // pesan saat nama penumpang sudah ada
                console.log(namaPenumpang +' ini sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang
            }
            // jika seluruh kursi terisi
            else if(i == penumpang.length -1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
        
    }
        
}