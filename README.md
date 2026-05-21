# MAISON — Fashion Landing Page

โปรเจกต์นี้เป็น Landing Page สำหรับแบรนด์แฟชั่น Premium สไตล์ Minimal Luxury พัฒนาด้วย Next.js และ TailwindCSS

---

## ภาพรวมโปรเจกต์

Landing Page 1 หน้าสำหรับแบรนด์แฟชั่น MAISON เน้นดีไซน์ที่ดูหรูหราเรียบง่าย มีการแสดงสินค้า ประวัติแบรนด์ และ Gallery ไม่มีระบบ Login, Cart, หรือ Payment

---

## Tech Stack

| เทคโนโลยี | การใช้งาน |
|---|---|
| Next.js 14 (App Router) | Framework หลัก |
| TypeScript | Type safety |
| TailwindCSS v4 | Styling |
| Framer Motion | Animation |
| Google Fonts | Cormorant (display) + Jost (body) |

---

## โครงสร้างโปรเจกต์

```
src/
├── app/
│   ├── layout.tsx          # Layout หลัก ครอบ Navbar + Footer
│   └── page.tsx            # หน้าแรก รวม Section ทั้งหมด
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar (รองรับ mobile)
│   │   └── Footer.tsx      # Footer พร้อม links
│   │
│   ├── section/
│   │   ├── HeroSection.tsx       # ส่วน Hero เต็มหน้าจอ
│   │   ├── CollectionSection.tsx # กริดสินค้า Collection 2026
│   │   ├── BrandStory.tsx        # เรื่องราวของแบรนด์
│   │   └── GallerySection.tsx    # Gallery รูปภาพ
│   │
│   └── ui/
│       ├── Button.tsx            # ปุ่ม 3 แบบ (primary / outline / ghost)
│       ├── ProductCard.tsx       # การ์ดสินค้า
│       ├── SectionHeader.tsx     # หัวข้อ Section
│       ├── SectionLabel.tsx      # Label เล็ก ๆ เหนือหัวข้อ
│       └── FadeInWhenVisible.tsx # Wrapper สำหรับ scroll animation
│
├── constants/
│   └── index.ts            # ข้อมูล Nav, สินค้า, Gallery
│
├── lib/
│   ├── motion.ts           # Framer Motion variants ทั้งหมด
│   └── utils.ts            # cn() utility สำหรับ class merging
│
├── styles/
│   └── globals.css         # Font import, base styles, custom utilities
│
└── types/
    └── index.ts            # TypeScript interfaces (Product, NavLink, ฯลฯ)
```

---

## การติดตั้งและรันโปรเจกต์

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รัน development server
npm run dev

# 3. เปิดเบราว์เซอร์ที่
http://localhost:3000
```

---

## โครงสร้างหน้าเว็บ (Sections)

```
[Navbar]
    ↓
[Hero]          — รูปเต็มจอ + ชื่อแบรนด์ + ปุ่ม CTA
    ↓
[Collection]    — กริดสินค้า 4 รายการ
    ↓
[Brand Story]   — ภาพ + เรื่องราวของแบรนด์
    ↓
[Gallery]       — กริดรูปภาพ 6 ช่อง
    ↓
[Footer]        — Links + Contact
```

---

## Design System

**Typography**
- หัวข้อใหญ่ — Cormorant (serif, บาง, หรูหรา)
- เนื้อหาทั่วไป — Jost (sans-serif, อ่านง่าย)
- Label — ตัวพิมพ์ใหญ่ทั้งหมด, tracking กว้าง

**สี**
- โทนหลัก — `stone` (เบจ-เทา-ดำ) ตลอดทั้งเว็บ
- ไม่มีสีฉูดฉาด เน้น neutral เพื่อความ premium

**Animation**
- ทุก Section มี fade-up เมื่อ scroll ถึง
- สินค้าและ Gallery มี stagger (ทยอยโผล่ทีละชิ้น)
- Hover states ทุกปุ่มและรูปภาพ

---

## คำอธิบายไฟล์สำคัญ

**`lib/motion.ts`** — เก็บ animation variants ทั้งหมดไว้ที่เดียว ไม่กระจาย ทำให้แก้ง่าย

**`constants/index.ts`** — ข้อมูลสินค้าและ gallery อยู่ที่นี่ ถ้าอยากเพิ่มสินค้าแก้ที่นี่ที่เดียว

**`FadeInWhenVisible.tsx`** — Component ที่ใช้ครอบ element ใดก็ได้ เพื่อให้มี scroll animation อัตโนมัติ

**`Button.tsx`** — ปุ่ม reusable 3 variant ใช้ได้ทั่วทั้งเว็บ

---

## หมายเหตุ

- โปรเจกต์นี้เป็น Frontend เท่านั้น ไม่มี backend หรือ database
- รูปภาพเก็บใน `/public/images/` แทนที่รูป placeholder ด้วยรูปจริงได้เลย
- ไม่มีระบบ Cart, Login, หรือ Payment ตามโจทย์ที่กำหนด