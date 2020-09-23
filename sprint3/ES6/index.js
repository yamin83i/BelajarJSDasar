// document.write("{'.'}")


// Pendeklarasian variable ES 6
// var,let,const




// const nama = "yam"
// console.log(nama)


//arrow Funtion

// mulai = (params) => (
//     params
// )
// console.log(mulai("hmm.."))


// luassegitiga = (alas, tinggi) => (alas * tinggi) / 2

// console.log(luassegitiga(9, 6))

// luaspersegi = (sisi) => (sisi * sisi)

// console.log(luaspersegi(9))

// luaslingkaran = (radius) => (22 / 7 * radius * radius)

// console.log(luaslingkaran(7))

// luaspersegipanjang = (panjang, lebar) => (panjang * lebar)

// console.log(luaspersegipanjang(7, 4))

// volumekubus = (sisi) => (sisi * sisi * sisi)

// console.log(volumekubus(3))

// volumebalok = (panjang, lebar, tinggi) => (panjang * lebar * tinggi)

// console.log(volumebalok(6, 4, 9))


//class
// class adalah kumpulan object yg dalamnya bisa di instansiasi  properti atau method dan dapat diwariskan

// class Santri {
//     constructor() {
//         this.nama = "yam",
//             this.umu = 23456,
//             this.jurus = "mobile";
//     }
//     sayhello = (params = "hai") => params;
// }

// let newsantri = new Santri();
// console.log(newsantri)


// class Rumah {
//     tembok = (params) => " temboknya berwarna " + params
// }

// class RumahRai extends Rumah {
//     constructor() {
//         super()
//         this.nama = "Rai "
//     }
//     tembokRumahRai = (warna) => "Rumah " + this.nama + this.tembok(warna)
// }
// let NewRumahRai = new RumahRai()
// console.log(NewRumahRai.tembokRumahRai(" hitam"))


// class Santro {
//     constructor(nama) {
//         this.nama = nama
//     }
// }
// let santri = new Santro("ono")
// console.log(santri.nama)

// class Santro {
//     getSantro(nama) {
//         return "namamu " + nama
//     }
// }

// let santri = new Santro()
// console.log(santri.getSantro("kei"))