function Cart(dataProduk){
    this.showProduk = dataProduk;
    this.tambahProduk = function(namaProduct, stock){
       var findProduct = dataProduk.find(item=>item.namaProduct == namaProduct);
       
        if(findProduct){
            findProduct.kuantitas += stock;
        }else{
            this.dataProduk.push({namaProduct:namaProduct, kuantitas:stock});
        }
    };
    this.hapusProduk = function(namaProduct){
        var idx; 
        for(var i = 0; i < this.showProduk.length; i++){
           if(this.showProduk[i].namaProduct == namaProduct){
            idx = i;
           }         
        }
        this.showProduk.splice(idx, 1);
    };
    this.hapusproductForEach = function(namaProduct){
        let id;
        this.showProduk.forEach((val, i)=>
        {
            if(val.namaProduct == namaProduct){
                id = i
            }
        });
        this.showProduk.splice(id, 1);
    };
    this.hapusProdukMap = function(namaProduct){
        const index = this.showProduk.map(e => e.namaProduct).indexOf(namaProduct);

        this.showProduk.splice(index, 1);
    };
}

var dataProduk = [
    {
        namaProduct: "apel merah",
        kuantitas: 1
    },
    {
        namaProduct: "pisang ijo",
        kuatitas: 0
    }
];
console.log();
var shoping = new Cart(dataProduk);