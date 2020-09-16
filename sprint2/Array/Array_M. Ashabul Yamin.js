var backend = ["Syofyan", "Sidik", "Roihan"]
var mobile = ["Hafif", "Wandi", "Ayub"]

backend.shift()
mobile.pop()
mobile.push("Sofyan")
backend.unshift("Ayub")
var pondok = [mobile.concat(backend)]
pondok.unshift("Yamin");
pondok.push("Yoga")
document.write(pondok)