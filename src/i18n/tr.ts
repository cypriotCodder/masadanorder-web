// Turkish copy — the source of truth for dictionary shape. Text from docs/landing-brief.md.

const tr = {
  meta: {
    title: 'Masadan — QR Menü ve Masadan Sipariş Sistemi | KKTC',
    description:
      'Müşterileriniz masadaki QR kodu okutur, menüye bakar ve sipariş verir. Sipariş saniyeler içinde mutfağınızda yazdırılır.',
  },
  nav: {
    label: 'Ana menü',
    howItWorks: 'Nasıl çalışır',
    features: 'Özellikler',
    faq: 'SSS',
    languageLabel: 'Dil',
  },
  cta: {
    requestDemo: 'Demo talep et',
    tryDemo: 'Canlı demoyu dene',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Merhaba, mekânım için Masadan demosu almak istiyorum.',
  },
  hero: {
    headline: 'Siparişler masadan, doğrudan mutfağa.',
    sub: 'Müşterileriniz masadaki QR kodu okutur, menüye bakar ve sipariş verir. Sipariş saniyeler içinde mutfağınızda yazdırılır. Garson beklemek yok, yanlış not alınan sipariş yok.',
  },
  problem: {
    title: 'Neden Masadan?',
    text: 'Yoğun saatlerde garsonlar yetişemiyor. Siparişler yanlış yazılıyor. Müşteriler sipariş vermek için bekliyor.',
    solutionLead: 'Masadan ile:',
    solution: 'müşteri kendi siparişini verir, ekibiniz servise odaklanır.',
  },
  how: {
    title: 'Nasıl çalışır',
    steps: [
      { title: "QR'ı okut", text: 'Masadaki QR kodu telefon kamerasıyla okutulur. Uygulama indirmek gerekmez.' },
      { title: 'Seç ve sipariş ver', text: 'Fotoğraflı, Türkçe ve İngilizce menüden seçim yapılır.' },
      { title: 'Mutfağa düşsün', text: 'Sipariş anında sipariş ekranına ve mutfak yazıcısına gelir.' },
    ],
  },
  features: {
    title: 'Özellikler',
    items: [
      { title: 'Türkçe & İngilizce menü', text: 'Turistler ve yerel müşteriler için.' },
      { title: 'Mevcut yazıcınızla çalışır', text: 'Yeni donanım almanıza gerek yok.' },
      { title: 'Canlı sipariş ekranı', text: 'Tüm masaları tek ekrandan takip edin.' },
      { title: 'Kolay menü yönetimi', text: 'Fiyat, ürün ve fotoğrafları kendiniz güncelleyin.' },
      { title: 'Sadece mekândan sipariş', text: 'Mekân dışından sipariş verilemez.' },
      { title: 'Hızlı kurulum', text: 'QR kodlarınızı hazırlıyor, kurulumu biz yapıyoruz.' },
    ],
  },
  proof: {
    title: 'Referanslar',
    inUseAt: "Heaven Restaurant'ta kullanılıyor",
  },
  demoBand: {
    title: 'Canlı demo',
    text: 'Müşteri gibi deneyin. Demo menüden sipariş verin, nasıl çalıştığını görün.',
  },
  faq: {
    title: 'Sıkça sorulan sorular',
    items: [
      { q: 'Yeni donanım gerekiyor mu?', a: 'Hayır. Mevcut yazıcınız ve bir bilgisayar yeterli.' },
      {
        q: 'AKINSOFT ile çalışır mı?',
        a: 'Siparişler mutfak yazıcınıza düşer; POS entegrasyonu için görüşelim.',
      },
      { q: 'Kurulum ne kadar sürer?', a: 'Genellikle birkaç gün içinde hazırız.' },
      {
        q: 'İnternet kesilirse ne olur?',
        a: 'Garsonlarınız her zamanki gibi sipariş almaya devam edebilir.',
      },
      { q: 'Fiyatı nedir?', a: 'Mekânınızın büyüklüğüne göre aylık abonelik. Görüşelim.' },
      { q: 'Müşterilerin uygulama indirmesi gerekir mi?', a: 'Hayır, telefon kamerası yeterli.' },
    ],
  },
  contact: {
    title: 'İletişim',
    text: 'Mekânınız için demo isteyin. Size geri dönelim.',
    whatsappLead: 'En hızlısı WhatsApp:',
    formTitle: 'Ya da formu doldurun',
    fields: {
      name: 'Adınız',
      venue: 'Mekân adı',
      town: 'Şehir / bölge',
      tables: 'Masa sayısı',
      phone: 'Telefon',
    },
    submit: 'Gönder',
    success: 'Teşekkürler! En kısa sürede dönüş yapacağız.',
    emailLabel: 'E-posta',
  },
  footer: {
    privacy: 'Gizlilik',
    region: 'KKTC',
  },
};

export type Dictionary = typeof tr;
export default tr;
