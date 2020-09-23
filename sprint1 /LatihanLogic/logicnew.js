var n = prompt("masukkan jiwa")
var nint = parseInt(n)

document.write("<h2>Soal No 1</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint / 2).toFixed(0) && x <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint / 2).toFixed(0) && y >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 2</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint).toFixed(0) && x <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == 1 && y >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 3</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint).toFixed(0) && x >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint).toFixed(0) && y >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 4</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint / 2).toFixed(0) && x >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint / 2).toFixed(0) && y >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 5</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint / 2).toFixed(0) && x >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint / 2).toFixed(0) && y <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 6</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (x == (nint).toFixed(0) && y <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (y == 1 && x >= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 7</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == (nint / 2).toFixed(0) && x <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == (nint / 2).toFixed(0) && y <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 8</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if (y == 1 && x <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else if (x == 1 && y <= (nint / 2).toFixed(0)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 9</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if ((y == (nint - 1) || y == 2) && (x < nint && x > 1)) {
            document.write("0")
        } else if ((x == (nint - 1) || x == 2) && (y < nint && y > 1)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}

document.write("<h2>Soal No 10</h2>")

for (var y = 1; y <= nint; y++) {
    for (var x = 1; x <= nint; x++) {
        if ((x == 1 || x == (nint / 2).toFixed(0) || x == nint) && y == 1) {
            document.write("0")
        } else if ((y == 1 || y == (nint / 2).toFixed(0) || y == nint) && x == 1) {
            document.write("0")
        } else if ((y == (nint / 2).toFixed(0) || y == nint) && y == x) {
            document.write("0")
        } else if ((y == (nint / 2).toFixed(0) && x == nint)) {
            document.write("0")
        } else if ((x == (nint / 2).toFixed(0) && y == nint)) {
            document.write("0")
        } else {
            document.write("- ")
        }
    }
    document.write("<br>")
}