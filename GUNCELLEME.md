# Slideshow ve iletişim güncellemesi

Yalnızca index.html, assets/style.css ve assets/main.js değişti. Bloglar, etkinlikler, istatistikler ve footer korunmuştur. Masaüstünde mevcut intro yazısının sağına fotoğraflı kart yerleşir; telefonda kart yazının altına iner. Slaytlar 6 saniyede değişir. Üzerine gelindiğinde veya klavyeyle odaklandığında geçiş durur. Numaralı düğmeler ve Oynat/Duraklat kontrolü bulunur.

## En kolay yükleme: üç dosyanın içeriğini değiştirin
1. Güncelleme ZIP dosyasını indirin ve tamamını çıkarın.
2. GitHub'da sitenizin repository sayfasını açın.
3. index.html dosyasına tıklayın. Kalem (Edit this file) düğmesine basın.
4. Bilgisayarınızdaki YENİ index.html dosyasını bir düz metin editörüyle açın (örneğin Not Defteri veya VS Code). Tarayıcıda görünen sayfayı değil, dosyanın kodunu kopyalayın.
5. GitHub editörünün içindeki eski kodun tamamını seçin, silin ve yeni dosyanın tüm içeriğini yapıştırın. Commit changes ile kaydedin.
6. Repository'ye dönün, assets klasörünü açın, style.css dosyasında aynı işlemi yapın.
7. assets/main.js dosyasında aynı işlemi yapın.
8. Son değişikliğin yayına geçmesini bekleyin. Siteyi Windows'ta Ctrl+Shift+R, Mac'te Command+Shift+R ile yenileyin.

ÖNEMLİ: style.css ve main.js assets klasörünün İÇİNDE kalmalı. Önceki sorunun tekrarlanmaması için dosyaları ana dizine taşımayın. Blog dosyalarını yeniden yüklemenize gerek yok.

## Kodu elle eklemek isterseniz
Hazır dosyaları tamamen değiştirmek daha kolaydır; bu bölüm yalnızca mevcut dosyalarınıza ayrıca değişiklik yaptıysanız faydalıdır. İki yöntemi birlikte uygulamayın.
1. assets/style.css: güncel dosyada `/* EKLEME: Hero slideshow` ile başlayan bölümün tamamını eski dosyanızın en sonuna ekleyin.
2. assets/main.js: güncel dosyada `// EKLEME: Hero slideshow` ile başlayan bölümün tamamını eski dosyanızın en sonuna ekleyin.
3. index.html: `<div class="wrap hero-inner">` açılışından sonraki intro içeriğini, `<div class="hero-bottom">` başlangıcına kadar güncel dosyadaki aynı aralıkla değiştirin. Yeni aralık hero-layout, hero-copy ve slideshow'u içerir. hero-bottom ve sonraki bölümler olduğu gibi kalır.
4. index.html: `<section id="iletisim"` ile başlayan kısmı, o bölümün ilk `</section>` kapanışına kadar güncel dosyada İLETİŞİM BAŞLANGIÇ/BİTİŞ yorumları arasındaki bölümle değiştirin.

## Slaytları düzenleme
index.html içinde HERO SLIDESHOW BAŞLANGIÇ yorumunu arayın.
- Başlık: slide-caption içindeki h2 metni.
- Blog hedefi: ilgili hero-slide bağlantısının href değeri.
- Fotoğraf: img etiketinin src değeri. İsterseniz kendi fotoğrafınızı assets klasörüne yükleyip örneğin assets/egitim.jpg yazın.
- Numaralı düğmelerin aria-label metinlerini de değişen başlıkla uyumlu tutun.
- Geçiş süresi: assets/main.js içindeki 6000 değeri milisaniyedir (6 saniye).
Fotoğraflar Unsplash'tan internet üzerinden yüklenir; şirketin gerçek ekibini veya tesislerini göstermez. Bağlantı kesilirse başlıklar ve blog bağlantıları görünür kalır.

## Gerçek iletişim bilgilerine geçiş
index.html içinde İLETİŞİM BAŞLANGIÇ yorumunu arayın.
Telefon kartında hem görünen `+90 (212) 000 00 00` yazısını hem de `href="tel:+902120000000"` hedefini değiştirin. tel hedefini boşluksuz uluslararası biçimde yazın.
E-posta kartında hem görünen `iletisim@example.com` yazısını hem de `href="mailto:iletisim@example.com"` hedefini değiştirin.
Gerçek bilgiler girildikten sonra contact-demo sınıflı örnek bilgi paragrafını kaldırın.
Örnek numara aktif hat değildir. example.com adresi örnek kullanım içindir; şirket e-postası değildir. Telefon bağlantısı uygun cihazda arama uygulamasını, e-posta bağlantısı ayarlı e-posta uygulamasını açar. Site kendi başına mesaj göndermez. Gerçek bilgi girilmeden bu kanallardan şirkete ulaşılamaz.

## Fotoğraf kaynakları
Eğitim ve danışmanlık, temsili ekip çalışması:
https://unsplash.com/es/fotos/un-grupo-de-personas-sentadas-alrededor-de-una-mesa-hoAFa_a5rEI
Dış ticaret, temsili liman fotoğrafı:
https://unsplash.com/s/photos/container-shipping
