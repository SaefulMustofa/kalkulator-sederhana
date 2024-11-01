// script.js
function hitung() {
    // Ambil nilai dari input
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let operator = document.getElementById("operator").value;
    let hasil;
    
        // Periksa jika input tidak valid
        if (isNaN(angka1) || isNaN(angka2)) {
        hasil = "Masukkan angka yang valid";
        } else {
        // Kondisi berdasarkan operator
        switch (operator) {
            case "tambah":
            hasil = angka1 + angka2;
            break;
            case "kurang":
            hasil = angka1 - angka2;
            break;
            case "kali":
            hasil = angka1 * angka2;
            break;
            case "bagi":
            if (angka2 === 0) {
                hasil = "Tidak bisa membagi dengan nol";
            } else {
                hasil = angka1 / angka2;
            }
            break;
            default:
            hasil = "Operator tidak valid";
        }
        }
    
        // Tampilkan hasil
        document.getElementById("hasil").innerText = hasil;
    }
    