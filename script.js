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

function hitungBMI() {
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let hasilBMI;

    if (isNaN(berat) || isNaN(tinggi)) {
        hasilBMI = "Masukan Angka yang Valid";
    } else {
        tinggi = tinggi / 100;
        let bmi = berat  / (tinggi * tinggi);
            if (bmi < 18.5) {
                hasilBMI = `BMI Anda adalah ${bmi.toFixed(2)}. Anda termasuk kategori kurus.`;
            } else if (bmi < 24.9) {
                hasilBMI = `BMI Anda adalah ${bmi.toFixed(2)}. Anda termasuk kategori normal.`;
            } else if (bmi < 29.9) {
                hasilBMI = `BMI Anda adalah ${bmi.toFixed(2)}. Anda termasuk kategori overweight.`;
            } else {
                hasilBMI = `BMI Anda adalah ${bmi.toFixed(2)}. Anda termasuk kategori obesitas.`;
            }
    }
    document.getElementById("hasilBMI").innerText = hasilBMI;
}

