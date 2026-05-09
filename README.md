# 🏨 Tripster - Full-Stack Hotel Reservation App

Tripster, dünya çapında binlerce konaklama seçeneğini kullanıcılarla buluşturan, yüksek performanslı ve kullanıcı odaklı bir rezervasyon platformudur. Proje, modern web teknolojileriyle inşa edilmiş olup, Haziran 2026'daki kariyer hedefleri doğrultusunda Hasan Erol tarafından optimize edilmiştir.

![Tripster Demo](hotels.gif)

## 🌟 Öne Çıkan Özellikler

*   **Gelişmiş Arama & Filtreleme:** Kullanıcılar şehre, konaklama adına ve belirli kriterlere göre anlık arama yapabilir.
*   **Akıllı Sıralama:** Tesisleri fiyata veya popülerliğe göre sıralama imkanı.
*   **Dinamik Otel Yönetimi:** Mevcut **23 aktif tesis** ile backend üzerinden gerçek zamanlı veri çekme ve listeleme.
*   **Kategori Bazlı Listeleme:** "Yakınınızdaki Lokasyonlar" ve "Popüler" gibi dinamik listeleme mantığı.
*   **Durum Takibi:** Tesislerin doluluk durumunu (Boş/Dolu) anlık olarak görüntüleme.
*   **Modern UI:** Hero section ve etkileşimli kart tasarımlarıyla profesyonel görünüm.

## 🛠️ Teknik Altyapı

### Çekirdek Teknolojiler
*   **React 19 & Vite 7:** En güncel sürümlerle hızlı ve modüler geliştirme süreci.
*   **TypeScript:** Tüm projede ölçeklenebilir ve hatasız kod yapısı için sıkı tip kontrolü.

### Kütüphaneler ve Araçlar
*   **Veri Yönetimi:** `@tanstack/react-query (v5)` ile verimli önbellekleme ve senkronizasyon.
*   **Form Yönetimi:** `Formik` & `Yup` ile güçlü validasyon ve veri girişi kontrolü.
*   **Styling:** `Tailwind CSS 4` ile modern, hızlı ve responsive tasarım sistemi.
*   **Navigasyon:** `react-router-dom` ile akıcı sayfa geçişleri.
*   **Bildirimler:** `react-toastify` ile kullanıcı dostu işlem geri bildirimleri.

## 📁 Proje Organizasyonu

Proje, kurumsal standartlarda modüler bir klasör yapısına sahiptir:
*   **`src/components`**: `Card`, `Header`, `Loader`, `Category` gibi yeniden kullanılabilir UI parçaları.
*   **`src/pages`**: `Home` (Ana Sayfa), `Create` (Oluşturma), `Detail` (Detay) gibi ana görünümler.
*   **`src/types`**: Proje genelinde kullanılan merkezi TypeScript tanımlamaları.
*   **`src/utils`**: Sabit veriler, API rotaları ve yardımcı fonksiyonlar.

## ⚙️ Kurulum ve Çalıştırma

1.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```
2.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```
3.  **Üretim için derleyin:**
    ```bash
    npm run build
