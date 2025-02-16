// //*
// 1 Bakiye görüntüleme
// 2 Para çekme
// 3 Para yatırma
// 4 çıkış *//

//ATM UYGULAMASI

let yeniSatir = "\r\n"
let bakiye = 1000;

let metin = "1- Bakiye Görüntüleme" + yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfen Yapacağınız İşlemi Seçiniz.";

let secim = prompt(metin);
switch(secim){
    case "1":
    alert("Bakiyeniz : " + bakiye);   
    break;
    case "2":
        let cekilecekTutar = Number (prompt("Çekmek İstediğiniz Tutarı Giriniz"));
        if (cekilecekTutar<bakiye){
            bakiye = bakiye - cekilecekTutar;
            alert ("Kalan bakiye : " + bakiye)

        } else{
            alert ("Paranızdan fazla para Çekemezsiniz"+yeniSatir+"bakiyeniz : "+bakiye + " " + "cekilecek Tutar : " + cekilecekTutar);
            break;
        }
    case "3":
        let yatırılacakTutar = Number(prompt("Yatırılacak Tutarı Belirtiniz :"));
        bakiye = bakiye + yatırılacakTutar
        alert ("Güncel Bakiyeniz : " + bakiye);
        break;
    case "4" :
        console.log("Sistemden Çıkış Yapıldı");
        break;
    default :
    console.log("Lütfen 1 - 4 arası Bir Seçim Yapınız..!");
    break
}

