# masadanorder.com — Landing Page Build Brief

## Context
Masadan is a QR self-ordering web app for restaurants and cafés. Customers scan a QR code on the table, order from their phone, and the order reaches the order desk / kitchen printer instantly. First live venue: Heaven Restaurant (heaven.masadanorder.com).

This brief is for the marketing site at the root domain.

## Goal
One action: get restaurant/café owners in **North Cyprus** to request a demo (WhatsApp first, form second).
- Audience: owners/managers, mostly Turkish-speaking, mostly on mobile.
- No prices on the page — pricing is discussed on contact.
- Market: North Cyprus (KKTC) only. Use local wording (TL is not mentioned; no Turkey-wide claims).

## Domains
- `masadanorder.com` + `www` → this landing page (www redirects to apex)
- `demo.masadanorder.com` → demo venue (separate tenant; test orders never reach a real kitchen)
- `*.masadanorder.com` → live venues on the Hetzner VPS (wildcard DNS + wildcard cert)

## Tech
- Static site: Astro (preferred) or Next.js static export
- Hosting: Cloudflare Pages (DNS already on Cloudflare)
- Form: Cloudflare Worker (or Formspree) → email notification; fields: name, venue name, town, table count, phone
- WhatsApp CTA: `https://wa.me/<NUMBER>?text=<prefilled message>` — placeholder number
- Analytics: Cloudflare Web Analytics (no cookie banner needed)
- i18n: Turkish default at `/`, English at `/en`; language toggle in header; `hreflang` tags
- Performance: Lighthouse 95+ mobile, images in WebP/AVIF, no heavy JS
- Must handle longer Turkish strings without breaking layout

## Design direction
Clean, modern, warm. Match Masadan app visual identity (reuse its colors/logo). Real screenshots of the demo venue menu and order desk inside phone/desktop frames. A 10–15 s looping screen recording of the ordering flow in the hero or "How it works" (muted, autoplay, lightweight MP4/WebM).

Sticky mobile bottom bar: [WhatsApp] [Demo talep et].

---

## Page copy (TR / EN)

### Header
Logo · Nasıl çalışır / How it works · Özellikler / Features · SSS / FAQ · [TR|EN] · **Demo talep et / Request a demo**

### 1. Hero
- **TR başlık:** Siparişler masadan, doğrudan mutfağa.
- **TR alt:** Müşterileriniz masadaki QR kodu okutur, menüye bakar ve sipariş verir. Sipariş saniyeler içinde mutfağınızda yazdırılır. Garson beklemek yok, yanlış not alınan sipariş yok.
- **EN headline:** Orders from the table, straight to the kitchen.
- **EN sub:** Guests scan the QR code on their table, browse your menu and order. The ticket prints in your kitchen within seconds — no waiting for a waiter, no mistaken orders.
- Buttons: **Demo talep et / Request a demo** (primary) · **Canlı demoyu dene / Try the live demo** → demo.masadanorder.com (secondary)
- Visual: phone mockup with demo menu

### 2. Problem → Solution
- **TR:** Yoğun saatlerde garsonlar yetişemiyor. Siparişler yanlış yazılıyor. Müşteriler sipariş vermek için bekliyor.
  **Masadan ile:** müşteri kendi siparişini verir, ekibiniz servise odaklanır.
- **EN:** At peak hours, staff can't keep up. Orders get written down wrong. Guests wait just to order.
  **With Masadan:** guests order themselves, your team focuses on service.

### 3. How it works / Nasıl çalışır
1. **QR'ı okut / Scan** — Masadaki QR kodu telefon kamerasıyla okutulur. Uygulama indirmek gerekmez. / Guests scan the table QR with their camera. No app to install.
2. **Seç ve sipariş ver / Choose & order** — Fotoğraflı, Türkçe ve İngilizce menüden seçim yapılır. / They pick from a photo menu in Turkish or English.
3. **Mutfağa düşsün / It hits the kitchen** — Sipariş anında sipariş ekranına ve mutfak yazıcısına gelir. / The order appears on your order screen and prints in the kitchen instantly.

### 4. Features / Özellikler
- **Türkçe & İngilizce menü / Turkish & English menu** — Turistler ve yerel müşteriler için. / For locals and tourists alike.
- **Mevcut yazıcınızla çalışır / Works with your printer** — Yeni donanım almanıza gerek yok. / No new hardware needed.
- **Canlı sipariş ekranı / Live order screen** — Tüm masaları tek ekrandan takip edin. / Track every table from one screen.
- **Kolay menü yönetimi / Easy menu management** — Fiyat, ürün ve fotoğrafları kendiniz güncelleyin. / Update prices, items and photos yourself.
- **Sadece mekândan sipariş / On-site ordering only** — Mekân dışından sipariş verilemez. / Orders can't be placed from outside the venue.
- **Hızlı kurulum / Quick setup** — QR kodlarınızı hazırlıyor, kurulumu biz yapıyoruz. / We prepare your QR codes and handle the setup.

### 5. Social proof
- "Heaven Restaurant'ta kullanılıyor / In use at Heaven Restaurant"
- Placeholder for owner quote + table count (fill only after Heaven gives permission)

### 6. Demo CTA band
- **TR:** Müşteri gibi deneyin. Demo menüden sipariş verin, nasıl çalıştığını görün.
- **EN:** Try it as a guest. Place an order on the demo menu and see how it works.
- Button → demo.masadanorder.com

### 7. FAQ / SSS
- **Yeni donanım gerekiyor mu? / Do I need new hardware?** — Hayır. Mevcut yazıcınız ve bir bilgisayar yeterli. / No. Your existing printer and a computer are enough.
- **AKINSOFT ile çalışır mı? / Does it work with AKINSOFT?** — Siparişler mutfak yazıcınıza düşer; POS entegrasyonu için görüşelim. / Orders print to your kitchen printer; let's talk about POS integration.
- **Kurulum ne kadar sürer? / How long does setup take?** — Genellikle birkaç gün içinde hazırız. / Usually ready within a few days.
- **İnternet kesilirse ne olur? / What if the internet goes down?** — Garsonlarınız her zamanki gibi sipariş almaya devam edebilir. / Your staff can keep taking orders as usual.
- **Fiyatı nedir? / How much does it cost?** — Mekânınızın büyüklüğüne göre aylık abonelik. Görüşelim. / A monthly subscription based on your venue. Let's talk.
- **Müşterilerin uygulama indirmesi gerekir mi? / Do guests need an app?** — Hayır, telefon kamerası yeterli. / No, their phone camera is enough.

### 8. Contact / İletişim
- **TR:** Mekânınız için demo isteyin. Size geri dönelim.
- **EN:** Request a demo for your venue. We'll get back to you.
- WhatsApp button (primary) + form (name, venue name, town, number of tables, phone) + email
- Success message: Teşekkürler! En kısa sürede dönüş yapacağız. / Thanks! We'll be in touch shortly.

### 9. Footer
Logo · © 2026 Masadan · Gizlilik / Privacy · KKTC · TR | EN

## SEO
- TR title: `Masadan — QR Menü ve Masadan Sipariş Sistemi | KKTC`
- EN title: `Masadan — QR Table Ordering for Restaurants | North Cyprus`
- Keywords: QR menü KKTC, masadan sipariş, restoran sipariş sistemi Girne / Lefkoşa / Gazimağusa, dijital menü Kıbrıs
- Open Graph image (1200×630) with logo + phone mockup — important for WhatsApp link previews
- Meta description in both languages

## Placeholders to fill
- WhatsApp number, contact email
- Logo files, brand colors
- Demo venue screenshots + screen recording
- Heaven quote (after permission)
