function hitungluas() {
    var ketik = prompt("choose grouss? segitiga,persegi panjang,lingkaran")
    if (ketik == "persegi panjang") {
        var panjang = parseInt(prompt("masukkan panjang"))
        var lebar = parseInt(prompt("masukkan lebar"))

        var luas = panjang * lebar
        alert(luas)

        var konfirmasi = confirm("ingin diulang?")
        if (konfirmasi == true) {
            hitungluas()
        } else {
            alert("dame yo")
        }
    }
    if (ketik == "segitiga") {
        var alas = parseInt(prompt("masukkan alas"))
        var tinggi = parseInt(prompt("masukkan tinggi"))

        var luas = alas * tinggi / 2
        alert(luas)

        var konfirmasi = confirm("ingin diulang?")
        if (konfirmasi == true) {
            hitungluas()
        } else {
            alert("dame yo")
        }
    }
    if (ketik == "lingkaran") {
        var radius = parseInt(prompt("masukkan radius"))

        var luas = 22 / 7 * radius * radius
        alert(luas)

        var konfirmasi = confirm("ingin diulang?")
        if (konfirmasi == true) {
            hitungluas()
        } else {
            alert("dame yo")
        }
    }
}

hitungluas()