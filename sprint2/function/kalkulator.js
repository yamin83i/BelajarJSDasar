function kalkulator() {

    var ketik = prompt("pilih +,-,/,*")

    if (ketik == "-") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan niali 2"))

        var kurang = nilai1 - nilai2
        alert(kurang)

        var konfirmasi = confirm("apakah ingin diulang?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("hmm...")
        }
    }
    if (ketik == "*") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan niali 2"))

        var kali = nilai1 * nilai2
        alert(kali)

        var konfirmasi = confirm("apakah ingin diulang?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("hmm...")
        }
    }
    if (ketik == "/") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan niali 2"))

        var bagi = nilai1 / nilai2
        alert(bagi)

        var konfirmasi = confirm("apakah ingin diulang?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("hmm...")
        }
    }
    if (ketik == "+") {
        var nilai1 = parseInt(prompt("masukkan nilai 1"))
        var nilai2 = parseInt(prompt("masukkan niali 2"))

        var tambah = nilai1 + nilai2
        alert(tambah)

        var konfirmasi = confirm("apakah ingin diulang?")
        if (konfirmasi == true) {
            kalkulator()
        } else {
            alert("hmm...")
        }
    }
}

kalkulator()