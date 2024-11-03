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