alert("   Selamat Datang" + "\n Al-Uzair Restouran")
var totalHarga = 0;

function daftar() {

    var menyuu = prompt("               MENU" + "\n makanan atau minuman")
    if (menyuu == "makanan") {
        var tabemono = prompt("MENYUU TABEMONO" + "\n Sushi      : Y 200.00" + "\n Ramen    : Y 150.00" + "\n Yakisoba : Y 100.00")
        if (tabemono == "sushi") {
            var sushi = 200
            var pesan = parseInt(prompt("Nanban desuka"))
            var total = (sushi * pesan)
            var totalRp = (total * 150)
            var konfirmasi = confirm("Anata wa Sushi no " + pesan + " bun o chuumon shimashita" + "\n zenbuu " + total + " yen" + "\n                               II desu ka")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hokani nani ka")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`soso omachi kudasai.` + `\n  zenbuu Rp.${totalHarga}`)
                }
            } else {
                alert("itterashaimasen")
            }
        } else if (tabemono == "ramen") {
            var ramen = 150
            var pesan = parseInt(prompt("Nanban desuka"))
            var total = (ramen * pesan)
            var totalRp = (total * 150)
            var konfirmasi = confirm("Anata wa ramen no " + pesan + " bun o chuumon shimashita" + "\n zenbuu " + total + " yen" + "\n                               II desu ka")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hokani nani ka")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`soso omachi kudasai.` + `\n  zenbuu Rp.${totalHarga}`)
                }
            } else {
                alert("itterashaimasen")
            }
        } else if (tabemono == "yakisoba") {
            var yakisoba = 150
            var pesan = parseInt(prompt("Nanban desuka"))
            var total = (yakisoba * pesan)
            var totalRp = (total * 150)
            var konfirmasi = confirm("Anata wa yakisoba no " + pesan + " bun o chuumon shimashita" + "\n zenbuu " + total + " yen" + "\n                                II desu ka")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hokani nani ka")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`soso omachi kudasai.` + `\n  zenbuu Rp.${totalHarga}`)
                }
            } else {
                alert("itterashaimasen")
            }
        }
    } else if (menyuu == "minuman") {
        var nomimono = prompt("QOIMATUL MASYRUBAH" + "\n Qohwatun : R 20.00" + "\n Labanun    : R 15.00" + "\n Syayyun    : R 10.00")
        if (nomimono == "qohwatun") {
            var qohwatun = 20
            var pesan = parseInt(prompt("kam hishosh"))
            var total = (qohwatun * pesan)
            var totalRp = (total * 4000)
            var konfirmasi = confirm("laqod tolabta " + pesan + " qohwata" + " bis sa'ri kulliy " + total + " riyalan" + "\n                                                                na'am am laa")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hunaaka amrul ukhro")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`intadzir lahdhoh` + `\n  kulluhu Rp.${totalHarga}`)
                }
            } else {
                alert("ma'as salamah")
            }
        } else if (nomimono == "labanun") {
            var labanun = 15
            var pesan = parseInt(prompt("kam hishosh"))
            var total = (labanun * pesan)
            var totalRp = (total * 4000)
            var konfirmasi = confirm("laqod tolabta " + pesan + " labanun" + "bis sa'ri kulliy " + total + " riyalan" + "\n                             na'am am laa")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hunaaka amrul ukhro")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`intadzir lahdhoh` + `\n  kulluhu Rp.${totalHarga}`)
                }
            } else {
                alert("ma'as salamah")
            }
        } else if (nomimono == "syayyun") {
            var syayyun = 10
            var pesan = parseInt(prompt("kam hishosh"))
            var total = (syayyun * pesan)
            var totalRp = (total * 4000)
            var konfirmasi = confirm("laqod tolabta " + pesan + " syayyun" + "bis sa'ri kulliy " + total + " riyalan" + "\n                             na'am am laa")

            if (konfirmasi == true) {
                totalHarga += totalRp
                var konfirmasi = confirm("hunaaka amrul ukhro")
                if (konfirmasi == true) {
                    daftar()
                } else {
                    alert(`intadzir lahdhoh` + `\n  kulluhu Rp.${totalHarga}`)
                }
            } else {
                alert("ma'as salamah")
            }
        }
    } else {
        var error = confirm("Sorry, please write the available choices");
        if (error === true) {
            daftar()
        }
    }
}

daftar()