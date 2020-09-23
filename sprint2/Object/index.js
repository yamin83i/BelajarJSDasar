document.write("['_'] <br>")
var mobil = {
    nama: "Avanza",
    warna: "hitam",
    tahun: 2020,
    harga: [1, 2, "mahal"],
    method: function() {
        // document.write("HMM>>>")
        return "Hmm...";
    }
}

console.log(mobil.nama)

// document.write(mobil.nama + "<br>")
// document.write(mobil.harga + "<br>")
document.write(mobil.method())
    // mobil.method()

// var dokumen = {
//     tulis: function(parameter = "l") {
//         document.write(parameter)
//     }
// }
// dokumen.tulis()


// var santri = [{
//         nama: "Yamin",
//         jurusan: "Mobile",
//     },
//     {
//         nama: "Yoga",
//         jurusan: "Mobile",
//     },
//     {
//         nama: "Iqbal",
//         jurusan: "Backend",
//     },
//     {
//         nama: "Faris",
//         jurusan: "Frontend",
//     },
// ]

// var filter = prompt("ketik jurusan ?")

// for (var n = 0; n < santri.length; n++) {
//     if (santri[n].jurusan == filter) {
//         document.write("nama = " + santri[n].nama + "</br>");
//         document.write("jurusan = " + santri[n].jurusan + "</br>")
//         document.write("<br>")
//     }
// }



var santri = [

    { nama: 'Hafif', jurusan: 'programmer', angkatan: 2018 },

    { nama: 'Dayat', jurusan: 'programmer', angkatan: 2018 },

    { nama: 'Syofyan', jurusan: 'programmer', angkatan: 2019 },

    { nama: 'Fikri', jurusan: 'multimedia', angkatan: 2019 },

    { nama: 'Bagas', jurusan: 'imers', angkatan: 2018 },

];

// var jurusan = prompt("masukkan jurusan")
var jurusan = prompt("masukkan jurusan")
var angkatan = parseInt(prompt("masukkan tahun"))

for (var n = 0; n < santri.length; n++) {
    if (santri[n].jurusan == jurusan && santri[n].angkatan == angkatan) {
        document.write(santri[n].nama)
        document.write("<br>")
        document.write(santri[n].jurusan)
        document.write("<br>")
        document.write("<br>")
    }
}


// document.write(santri[0].nama)
// document.write(santri[1][0])