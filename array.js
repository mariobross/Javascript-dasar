// Manipulasi array
// method pada Array
// length = untuk menghitung jumalah array
// join = merubah array menjadi string
// push = menambah isi array dari belakang
// pop = menghapus isi array dari belakang
// unshift = menambah isi array dari depan
// shift = menghapus isi array dari depan 
// slice = mengambil beberapa array untuk di jadikan array baru
// splice = menghapus, menyambung atau menambah array di di bagian tertentu
// sort = myusun isi array\
// filter = mencari data pada array yang mengembalikan banyak nilai
// find = mencari data pada array yang mengembalikan hanya satu nilai


var arr = ["Saifudin", "Mahara", "belajar", "javascript"];

console.log(arr.join(" - "));
//  1.Menambah Array dengan method push dan unshift
arr.push('dari', 'sandhika', "galih");
arr.unshift('semangat');
// console.log(arr);

// 2. Menghapus isi Array dengan pop dan shift
arr.pop();
arr.shift();

// 3. Menampilkan isi Array
for( var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// 4. splice method
// splice(indexAwal, dataYgIngindiHapus, elemenBaru, elemenBaru2, dst )
arr.splice(0, 2, 'Agus', "Tino");


// 5. slice(menghasilkan array baru)
// slice(awalIndex, akhirIndex)
var arr2 = arr.slice(1, 5);
console.log(arr2.join(" - "));

// 6. forEach(tidak mengembaklikan array)
var angka = [1, 2, 3, 4, 5, 6];
// forEach tanpa index hanya element(e)
angka.forEach(function(e){
    console.log(e);
});

// forEach menggunakan index(i) dan element(e)
arr.forEach(function(e, i){
    console.log(`test index ke-${i} dan element : ${e}`);
});

// 7, map(mengembalikan nilai array)
var angka2 = angka.map(function(e){
     return e * 2 ;
 });

console.log(angka2.join("-"));

// 8.sort
var angkaSort =[1, 7, 3, 4, 6, 5, 2, 20, 10, 100, 110];
console.log(angkaSort.sort());
console.log(angkaSort.sort(function(a,b){
    return a-b;
}));

// 9. filter(pengembalian dalam bentuk array)
var angka3 = angkaSort.filter(function(x){
    return x > 5;
})

console.log(angka3.join(" - "));

// 10. find(pengembaliannya bukan array karena hanya satu nilai saja)
var angka4 = angkaSort.find(function(x){
    return x > 5;
});

console.log(angka4);

console.log(arr.join(" - "));