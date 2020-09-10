// // alert 

// alert("peringatan jangan dibuka")

// var jawaban = confirm("setuju atau tidak?")
// var pilih = confirm("ya atau tidak")
// var br ="<br>"

// document.write(jawaban+"<br>")   
// document.write(pilih+"<br>")


// var nama = prompt("masukkan namamu ")

// document.write(nama+br)


// // // program hitung persegi panjang
// var panjang = prompt("masukkan panjang")
// var lebar = prompt("masukkan lebar")

// var pint = parseInt (panjang)
// var lint = parseInt(lebar)

// var luas = pint +lint

// document.write("luas persegi adalah"+luas+br)


// // program hewan berkaki
// // if (//pengkondisian){
//     // output
// // }
// // else{
//     // ouput
// // }

// var jumlahkaki = prompt("masukkan jumlah kaki hewan")
// var angka = prompt("masukkan angka dua")

// if (jumlahkaki == 6,1){
//     document.write("bala-bala")
// }else if (jumlahkaki == 4){
//     document.write("sapi,   karbau, rabbit, kdok")
// }else {
//     document.write("tidak tersedia")
// }

// if (angka == 2) {
//     // output
//     document.write("angka dua benar"+br)
// }
// else{       
//     //ouput
//     document.write("bukan angka dua")
// }


var nilai1 = prompt ("masukan nilai 1")
var nilai2 = prompt ("masukan nilai 2")
var operasi = prompt("masukkan tanda *,/,+,-")

var n1int = parseInt(nilai1)
var n2int = parseInt(nilai2)
var kali  =nilai1 * nilai2
var tambah = n1int+n2int
var bagi = nilai1/nilai2
var kurang = nilai1-nilai2

if ( operasi == "*"){
    document.write(kali)
}else if (operasi == "/"){
    document.write(bagi)
}else if (operasi == "+"){
    document.write(tambah)
}else if (operasi == "-"){
    document.write(kurang)
}


// membuat fitur login sederhana

// var username = "MAY"
// var password = "1234"

// var inputusername = prompt("masukkan username")
// var inputpassword = prompt("masukkan password")

// if (inputusername==username && inputpassword==password){
//     document.write("login berhasil")
// }  else if (inputusername != username ){
//     document.write("username salah")
// }else if (inputpassword != password){
//     document.write("password salah")
// }