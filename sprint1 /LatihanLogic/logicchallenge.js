// alert("your Logic")


var n = prompt("Masukkan jumlah perulangan")
var nint = parseInt(n)

// for (var t=1; t<=nint; t++){
//     document.write("*<br> ")
// }document.write("<hr>")
// document.write("*<br> ")

// for (var y=1; y<=nint; y++){
//     for (var a=1; a<=nint; a++){
//     document.write("*")
// }
// document.write("<br>")
// }

// for (var y=1; y<=5; y++){
//     for (var x=1; x<=5; x++)
//         if (y==x )
//         document.write("0")
//          else

//         document.write("- ")

//     document.write("<br>")
// }document.write("<hr>")


document.write("<h1> Logic Challenge </h1>")
document.write("<h2>Soal No 1</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == x) {
            document.write("x");
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 2</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x == (nint + 1) - y) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 3</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == x || x == (nint + 1) - y) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 4</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x <= y) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 5</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y <= x) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2> Soal No 6</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x <= (nint + 1) - y) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2> Soal No 7</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y >= (nint + 1) - x) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2> Soal No 8</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == x || x == (nint + 1) - y || x == (nint / 2).toFixed(0) || y == (nint / 2).toFixed(0)) {
            document.write("x")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 9</h2>")


for (var y = 1; y <= 9; y++) {
    if (y % 2 == 1) {
        document.write(y + "&nbsp")
    }
}
document.write("<br>")
document.write("<hr>")

document.write("<h2>Soal No 10</h2>")


for (var y = 2; y <= 10; y++) {
    if (y % 2 == 0) {
        document.write(y + "&nbsp")
    }
}
document.write("<br>")
document.write("<hr>")


document.write("<h2>Soal No 11</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x <= y && y <= (nint + 1) - x) {
            document.write("x")
        } else if (x >= y && y >= (nint + 1) - x) {
            document.write("y")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 12</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x <= y && y >= (nint + 1) - x && y <= nint) {
            document.write(y)
        } else if (x >= y && y >= (nint + 1) - x && y <= nint) {
            document.write(y)
        } else {
            document.write("&nbsp")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 13</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == x) {
            document.write(x * 2 - 1);
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 14</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y <= x && x <= (nint + 1) - y) {
            document.write(x * 2 - 1)
        } else if (x <= y && y >= (nint + 1) - x) {
            document.write(x * 2 - 2)
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 15</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint + 1) - x) {
            document.write(x * 2 - 2);
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 16</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y >= x) {
            document.write(x * 2 - 1);
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 17</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint + 1) - x) {
            document.write(x * 2 - 2);
        } else if (x == y) {
            document.write(x * 2 - 1)
        } else if (x <= y && y >= (nint + 1) - x) {
            document.write("A")
        } else if (y <= x && x <= (nint + 1) - y) {
            document.write("B")
        } else if (y >= (nint + 1) - x) {
            document.write("C")
        } else {
            document.write("D")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 18</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint + 1) - x) {
            document.write(x * 2 - 2);
        } else if (x == y) {
            document.write(x * 2 - 1)
        } else if (x >= y && y >= (nint + 1) - x) {
            document.write("A~")
        } else if (x <= y && y <= (nint + 1) - x) {
            document.write("B")
        } else {
            document.write("&nbsp")
        }
    }
    document.write("<br>")
}
document.write("<hr>")

document.write("<h2>Soal No 19</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y >= (nint + 1) - x) {
            document.write(x * 2 - 2);
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}
document.write("<hr>")


document.write("<h2>Soal No 20</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint / 2).toFixed(0) && x <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint / 2).toFixed(0) && y >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint + 1) - y && y >= nint / 2) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}