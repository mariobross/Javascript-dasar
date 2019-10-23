// Pengelolahan Angkot
// -sopir
// -trayek
// -kas
// -penumpang

function Angkot(sopir, trayek, kas, penumpang){
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;

    //method penumpang naik
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // method penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log('angkot masih kosong');
            return false;
        }

        for(var i = 0; i< this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot("Saifudin Mahara", ['Kotabumi', "Veteran"],0,[]
);

var angkot2 = new Angkot("Mahara", ['Karawaci', "Portal"],0,[]
);