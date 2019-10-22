// pengelolahan penumpang
var penumpang =["ara", "mahara", "saifudin"];
var hapusPenumpang = (namaPenumpang, penumpang) =>{
    // jika penumpangnya masih kosong
    if( penumpang.length == 0){
        // tampilkan alert dalam console
        console.log("penumpang masih kosong");
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }else{
        // check banyaknya penumpang
        for(var i=0; i<penumpang.length; i++){
            // jika ada penumpang yang turun maka akan di gantikan dengan undefined
            if(penumpang[i] == namaPenumpang){
                // ubah penumpang yang turun dengan undefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // check nama penumpang di dalam penumpang jika tidak ada tampilkan error
            else if(i == penumpang.length -1){
                // tampilkan error jika yang di hapus tidak ada di dalam angkot
                console.log(namaPenumpang+ ' tidak ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}