// percabangan dengan switch
// parseInt() mengubah string menjadi integer
var angka = parseInt(prompt('masukan angka: '));

switch (angka) {
    case 1:
        alert('anda memasukan angka 1');
        break;
    case 2:
        alert('anda memasukan angka 2');
        break;
    case 3:
        alert('anda memasukan angka 3');
        break;
    default:
        alert('anda memasukan angka yang salah atau lebih besar dari 3')
        break;
}
