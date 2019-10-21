// pengulangan dan pengkodisian secara bersarang 
// menampilkan 5 bintang

var string = '';
for(var i = 0; i < 5; i++){
    for(var j = 0; j <= i; j++){
        string += '*';
    }
    string += '\n'; 
}
console.log(string);

var string1 = '';
for(var i = 5; i > 0; i--){
    for(var j = 0; j < i; j++){
        string1 += '*';
    }
    string1 += '\n'; 
}
console.log(string1);

var string2='';
for(var i = 1; i <= 5; i++){
    for(var j = 5; j >= i; j--){
        string2 += ' ';
    }
    for(var k = 1; k <= i; k++){
        string2 += '*';
    }
    string2 +='\n';
}
console.log(string2);

var string3 = '';
for(var i = 1; i <= 5; i++){
    for( var j= 1; j <= i; j++){
        string3+= ' '
    }
    for( var k = i; k <=
         5; k++){
        string3 +='*'
    }
    string3 += '\n';
}
console.log(string3);

var string4='';
for(var i = 1; i <= 5; i++){
    for(var j = i; j <= 5; j++){
        string4 += ' ';
    }
    for(var k = 1; k <= i; k++){
        string4 += '*';
    }
    for(var l = 1; l <= i-1; l++){
        string4 += '*';
    }
    string4 +='\n';
}
console.log(string4);

var string5 = '';
for (var i = 1; i <= 5; i++){
    for (var j = 1; j <= i; j++){
        string5 += " ";
    }
    for (var k = i; k <= 5; k++){
        string5 += "*";
    }
    for (var l = i+1; l <= 5; l++){
        string5 += "*";
    }
    string5 += "\n";
}
console.log(string5)