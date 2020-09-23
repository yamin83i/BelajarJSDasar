class BangunDatar {
    constructor(a = 5, b = 10, c = 6, d = 7, e = 8) {
        this.panjang = a
        this.tinggi = b
        this.sisimiring = c
        this.radius = d
        this.sisi = e
    }
}

class HitungSegitiga extends BangunDatar {
    hitungluassegitiga() {
        return this.panjang * this.tinggi / 2
    }
    hitungkelilingsegitiga() {
        return this.panjang + this.sisimiring + this.tinggi
    }
}
class HitungPersegi extends BangunDatar {
    hitungluasPersegi() {
        return this.sisi * this.sisi
    }
    hitungkelilingPersegi() {
        return this.sisi * 4
    }
}
class HitungLingkaran extends BangunDatar {
    hitungluasLingkaran() {
        return this.radius * this.radius * 22 / 7
    }
    hitungkelilingLingkaran() {
        return this.radius * 2 * 22 / 7
    }
}

let luassegitiga = new HitungSegitiga()
let kelilingsegitiga = new HitungSegitiga()
let luasPersegi = new HitungPersegi()
let kelilingPersegi = new HitungPersegi()
let luasLingkaran = new HitungLingkaran()
let kelilingLingkaran = new HitungLingkaran()
document.write(("luas segitiga adalah ") + luassegitiga.hitungluassegitiga() + ("<br>"))
document.write(("keliling segitiga adalah ") + kelilingsegitiga.hitungkelilingsegitiga() + ("<br>"))
document.write(("luas Persegi adalah ") + luasPersegi.hitungluasPersegi() + ("<br>"))
document.write(("keliling Persegi adalah ") + kelilingPersegi.hitungkelilingPersegi() + ("<br>"))
document.write(("luas Lingkaran adalah ") + luasLingkaran.hitungluasLingkaran() + ("<br>"))
document.write(("keliling Lingkaran adalah ") + kelilingLingkaran.hitungkelilingLingkaran() + ("<br>"))
