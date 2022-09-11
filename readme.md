**WeatherAPI** - Hava Durumu Bilgilerini Temel Bir Yöntem Olarak Öğrenin.

- Anma:
``` js
const weather = require("havadurumu.js")
```

- Kodu Başlat:
``` js
module.exports = zaman uyumsuz() => {
const check = weather({
country: "Azerbaycan", // Tüm Lokasyonlara İzin Verilir, ancak ermenistan değil
days: 3 //1,2,3,4,.....
})
console.warn(`Hava Durumu Bilgisi: ${check}`)

```

**📎 | Fonksiyonlar**

İsim | Bilgi | Kullanmak
------------ | ------------ | -------------
country | Ülke Adı Girme ve Ülkenin Hava Durumu Bilgilerini Bulma | {country: "Turkey"}
days | Kontrol Edilecek Günleri  Bilgi Girin | {gün: 3}


-

**İletişim: klaus#3836**