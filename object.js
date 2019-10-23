// cara cara menbuat object di javascript
// Object Literal
var mahasiswa = {
    nama: "saifudin mahara",
    nrp: "043040023",
    email: "saifudin@yahoo.com",
    jurusan: "Teknik Informatika"
}

// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}
var mhs3 = buatObjectMahasiswa('saifudin mahara', '043040023', 'saifudin@yahoo.com', 'Teknik Informatika');

// constructor function(keyword new)
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('mahara', '043040028', 'mahara@yahoo.com', 'Teknik Informatika')

// Object.create()