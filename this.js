// cara cara menbuat object di javascript
// pengertian dan pengembalian this

// cara-1 dengan function declaration
function halo(){
    console.log(this);
    console.log('function declaration');
}
// pemanggilanya pada function declaration
halo();
// isi dari this disini adalah window atau global scope


// cara-2 Object Literal
var obj = {nama:"ara", umur:29};
obj.hallo = function(){
    console.log(this);
    console.log('Object Literal');
}
// pemanggilan
obj.hallo();
// isi dari this adalah pengembalian object yang bersangkutan



// constructor function(keyword new)
function Halo(){
   console.log(this);
   console.log('constructor function')
}
// pemanggilan
new Halo();
// isi dari this ini adalah mengembalikan object yang baru di buat oleh keyword new

