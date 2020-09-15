// document.write("('>_<')")

// // syntax atau aturan dalam membuat function
// function namaFunction() {
//     //action
//     document.write("('>_<')")
// }

// namaFunction()

// var namaVariabel = "string"

// function namaFunction(parameter) {
//     console.log(parameter)
// }

// namaFunction("string")


// function luaspersegi(sisi) {
//     document.write(sisi * sisi)
// }

// luaspersegi(43)

// document.write("<br>")
var hitungluas = prompt("luaspersegipanjang, luassegitiga, luaslingkaran")

function luaspersegipanjang(panjang = 0, lebar = 6) {
    // document.write(typeof panjang)
    // document.write(typeof lebar)
    alert(panjang * lebar)
    var konfirmasi = confirm("ingin diulang")
    if (konfirmasi == true) {
        var pprompt = prompt("panjang")
        var lprompt = prompt("lebar")
        var pint = parseInt(pprompt)
        var lint = parseInt(lprompt)
        luaspersegipanjang(pint, lint)

    } else {
        alert("luas")
    }
}

document.write("<br>")

var pprompt = prompt("panjang")
var lprompt = prompt("lebar")
var pint = parseInt(pprompt)
var lint = parseInt(lprompt)
luaspersegipanjang(pint, lint)