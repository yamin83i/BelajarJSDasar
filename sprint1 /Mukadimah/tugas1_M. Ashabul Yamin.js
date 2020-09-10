// 1. diket panjang = 10cm, lebar= 5cm, dan tinggi= 8cm.hitunglah luas permukaan balok dan volume balok sehingga menampilkan output pada web

// diketahui:
// panjang =10cm
// lebar = 5cm
// tinggi =8cm

// ditanya:
// volume dari balok adalah ... cm3
// luas permukaan balok adalah ... cm2
// volume balok dalam liter ... l
// volume balok ketika diperbesar 3 kali ... cm3


var panjang = 10
var lebar = 5
var tinggi = 8
var volume = panjang*lebar*tinggi
var luas = 2*(panjang*lebar+panjang*tinggi+lebar*tinggi)
var liter = volume/1000
var diperbesar = volume*3


document.write("1. diketahui: <br>")
document.write("p = "+panjang+" cm")
document.write("<br>")
document.write("l = "+lebar+" cm")
document.write("<br>")
document.write("t = "+tinggi+" cm <br>")
document.write("ditanya: <br>")
document.write("volume balok adalah "+volume+" cm3")
document.write("<br>")
document.write("luas pemukaan balok adalah "+luas+" cm2")
document.write("<br>")
document.write("volume balok dalam liter adalah "+liter+" L")
document.write("<br>")
document.write("volume balok diperbesar 3kali adalah "+diperbesar+" cm3")
document.write("<br>")

//2. diketahui segitiga memiliki alas =10cm, tinggi=12cm. hitunglah luas segitiga, dan memiliki keluaran output pada web sbb

// diket :
// alas = 10cm = 0.1m
// tinggi =12cm = 0.12m

//ditanya :
//luas segitiga adalah ...m2


var alas = 10
var tinggi = 12
var luas = 0.5*alas*tinggi/10000

document.write("2. diketahui: <br>")
document.write("a = "+alas+" cm <br>")
document.write("t = "+tinggi+" cm <br>")
document.write("dianya:<br> " )
document.write("luas segitiga adalah " + luas+ " m2")   