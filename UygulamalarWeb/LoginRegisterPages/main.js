function func() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert("name:" + String(isim) + " password: " + String(sifre));

        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}

function sifreUnutma() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert("Yeni kullanici Adi: " + String(isim) + "\nYeni Sifre: " + String(sifre));
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}

function kayit() {
    var isim = document.getElementById("name").value;
    var sifre = document.getElementById("password").value;

    if (isim != "" && sifre != "") {
        alert("Kullanici Adi: " + String(isim) + "\nSifre: " + String(sifre));
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }
}