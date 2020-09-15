var n = prompt("Masukkan jumlah perulangan")
var nint = parseInt(n)

document.write("<h1> Logic Challenge </h1>")
document.write("<h2>Soal No 1</h2>")

for(var y=1; y<=nint; y++){
    for (var x=1; x<=nint; x++){
        if(y==x){
            document.write("x");
        }else{
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2>Soal No 2</h2>")

for (var y=1; y<=nint; y++){
    for (var x=1; x<=nint; x++){
        if (x==(nint+1)-y){
            document.write("x")
        }else{
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2>Soal No 3</h2>")

for (var y=1; y<=nint;y++ ){
    for (var x=1; x<=nint;x++){
        if (y==x || x==(nint+1)-y){
            document.write("x")
        }else {
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2>Soal No 4</h2>")

for (var y=1; y<=nint;y++ ){
    for (var x=1; x<=nint;x++){
        if ( x<=y ){
            document.write("x")
        }else {
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2>Soal No 5</h2>")

for (var y=1; y<=nint;y++ ){
    for (var x=1; x<=nint;x++){
        if ( y<=x ){
            document.write("x")
        }else {
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2> Soal No 6</h2>")

for (var y=1; y<=nint; y++){
    for (var x=1; x<=nint;x++){
        if( x<=(nint+1)-y){
            document.write("x")
        }else{
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2> Soal No 7</h2>")

for (var y=1; y<=nint; y++){
    for (var x=1; x<=nint;x++){
        if( y>=(nint+1)-x){
            document.write("x")
        }else{
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")

document.write("<h2> Soal No 8</h2>")

for (var y=1; y<=nint;y++ ){
    for (var x=1; x<=nint;x++){
        if (y==x || x==(nint+1)-y||x==3||y==3){
            document.write("x")
        }else {
            document.write("- ")
        }
    }document.write("<br>")
}document.write("<hr>")


document.write("<h2>Soal No 9</h2>")


for (var y=1; y<=9;y+=2){
        if(y % 2==1){
            document.write(y+"&nbsp")
        }
}document.write("<br>")
document.write("<hr>")

document.write("<h2>Soal No 10</h2>")


for (var y=2; y<=10;y+=2){
    if(y % 2==0){
        document.write(y+"&nbsp")
    }
}document.write("<br>")
document.write("<hr>")