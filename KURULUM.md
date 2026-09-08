# İnovakademi — GitHub Pages site paketi

## Bilgisayarınızda açın
ZIP dosyasını çıkarın ve index.html dosyasına çift tıklayın. Kurulum, paket yükleme veya derleme gerekmez. HTML, CSS ve JavaScript dışında bağımlılık kullanılmadı. Sistem yazı tipleri kullanılır; dış görsel veya font isteği yoktur.

## GitHub Pages ile yayınlayın
1. GitHub hesabınızda `inovakademi-demo` adlı public (herkese açık) bir repository oluşturun.
2. Add file → Upload files seçin. Bu klasörün İÇİNDEKİ dosyaları ve assets klasörünü yükleyin. index.html doğrudan repository ana dizininde olmalıdır; ZIP dosyasını yüklemeyin.
3. Commit changes ile kaydedin.
4. Settings → Pages → Build and deployment → Source bölümünde Deploy from a branch seçin.
5. Branch: main, klasör: / (root) seçin ve Save düğmesine basın.
6. Yayın tamamlandığında Pages bölümünde gösterilen adresi açın. Adres genellikle https://KULLANICIADINIZ.github.io/inovakademi-demo/ şeklindedir. Yayın birkaç dakika sürebilir.

Resmî kılavuz: https://docs.github.com/en/pages/quickstart

## Kopyala-yapıştır ile kullanma
GitHub’da Add file → Create new file üzerinden aynı adlarla dosyalar oluşturabilirsiniz. Örneğin `assets/style.css` adını yazarak klasörü de oluşturabilirsiniz. Dosya içeriklerini aynen yapıştırın. Bütün HTML dosyalarını ve assets içindeki iki dosyayı koruyun. Bağlantılar göreli olduğu için proje alt dizininde de çalışır.

## Neyi nereden değiştireceksiniz?
- Ana sayfa, istatistikler, etkinlik kartları, blog kartları: index.html
- Lacivert ve diğer renkler, boşluklar, mobil görünüm: assets/style.css başındaki :root ve devamındaki stiller
- Mobil menü ve deneyim sayacı: assets/main.js
- Etkinlik detayları: etkinlik-*.html
- Blog yazıları: blog-*.html
- Logo: Metin tabanlı geçici marka yazısıdır; resmî logo değildir. Tüm HTML dosyalarındaki .brand bağlantılarını onaylı logonuzla değiştirebilirsiniz.
- Header ve footer statik olduğu için ortak bir değişikliği bütün HTML dosyalarına uygulayın.

## Yayın öncesi içerik düzenlemesi
31+ ifadesi kurumun kuruluş yaşını değil, kullanıcının verdiği yönetim ekibi deneyimini anlatır. “Yüzlerce” ifadesi verilen bilgiye dayanır. 3 odak, üç hizmet alanıdır. Kesin olmayan müşteri veya başarı sayıları eklenmedi.
Etkinlik tarihleri/programları ve blog yazıları örnektir; sayfalarda bu açıkça belirtilir. Gerçek içerikle değiştirdiğinizde örnek etiketlerini kaldırın. Geçmiş tarihli etkinlikleri kaldırın veya güncelleyin.
Telefon, e-posta ve adres verilmediği için iletişim düğmesi mevcut siteye yönlenir. Gerçek iletişim bilgileriyle değiştirebilirsiniz. Form veya kayıt sistemi yoktur.
Eğitim kataloğu bağlantısı kullanıcının sağladığı adrestir; dosyanın erişilebilirliğini yayın öncesinde kontrol edin.

## Taşıma
Dosyaları statik hosting ana dizinine yükleyebilirsiniz. WordPress'e taşıma ayrıca tema uyarlaması gerektirir; bu dosyalar bir WordPress teması değildir.

## Erişilebilirlik
Anlamlı başlıklar, içeriğe geç bağlantısı, görünür klavye odağı, mobil menüde aria-expanded ve Escape desteği bulunur. Hareketi azalt tercihi animasyonları kapatır. JavaScript kapalıyken ana içerikler, bağlantılar ve gezinme görünür kalır.
