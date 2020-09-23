function resto() {
    alert("ようこそ " + "welcome" + " selamat datang Bienvenue bonvenon أهلا بك dobrodošli" + " to my resto")
    var ketik = prompt("Naon anu anjeun pikahoyong? pakanan, drink, tiket wc,special menu")

    if (ketik == "pakanan") {

        var makanan = prompt("pilih makanan: mie ayam;Rp7000, bakso;Rp12000, sego goreng;Rp10000")
        var uang = parseInt(prompt("masukkan uangmu"))
        if (makanan == "mie ayam") {
            var hargamieayam = 7000
            var sisa = uang - hargamieayam
            alert("pesananmu adalah " + makanan + " kembalianmu adalah " + sisa)
        } else if (makanan == "bakso") {
            var hargabakso = 12000
            var sisa = uang - hargabakso
            alert("pesananmu adalah " + makanan + " kembalianmu adalah " + sisa)
        } else if (makanan == "sego goreng") {
            var hargasegogoreng = 10000
            var sisa = uang - hargasegogoreng
            alert("pesananmu adalah " + makanan + " kembalianmu adalah " + sisa)
        }


        var konfirmasi = confirm("anjeun hoyong mesen deui??")
        if (konfirmasi == true) {
            resto()
        } else {
            alert("dame yo")
        }
    }
    if (ketik == "drink") {

        var minuman = prompt("pilih minuman:es teh;3000, es jeruk; 4000")
        var g = parseInt(prompt("masukkan uangmu"))
        if (minuman == "es teh") {
            var hargaesteh = 3000
            var d = g - hargaesteh
            alert("pesananmu adalah " + minuman + " kembalianmu adalah " + d)
        } else if (minuman == "es jeruk") {
            var hargaesjeruk = 4000
            var d = g - hargaesjeruk
            alert("pesananmu adalah " + minuman + " kembalianmu adalah " + d)
        }
        var konfirmasi = confirm("anjeun hoyong mesen deui??")
        if (konfirmasi == true) {
            resto()
        } else {
            alert("ya udah pulang sana")
        }
    }
    if (ketik == "tiket wc") {

        var tiket = prompt("pilih tiket wc: wc duduk;Rp.5000, wc berdiri;Rp.2000, wc jongkok;Rp.3000")
        var g = parseInt(prompt("masukkan uangmu!!!"))
        if (tiket == "wc duduk") {
            var wcduduk = 5000
            var t = g - wcduduk
            alert("silahkan ini tiket " + tiket + " anda dan ini kembalian anda " + t)
        } else if (tiket == "wc bediri") {
            var wcberdiri = 2000
            var t = g - wcberdiri
            alert("silahkan ini tiket " + tiket + " anda dan ini kembalian anda " + t)
        } else if (tiket == "wc jongkok") {
            var wcjongkok = 3000
            var t = g - wcjongkok
            alert("silahkan ini tiket " + tiket + " anda dan ini kembalian anda " + t)
        }
        var konfirmasi = confirm("anjeun hoyong mesen deui??")
        if (konfirmasi == true) {
            resto()
        } else {
            alert("ya udah pulang sana")
        }
    }
}
resto()