# AGENTS.md

คำแนะนำสำหรับ AI Agent ที่เข้ามาช่วยพัฒนาโปรเจกต์นี้

---

## โปรเจกต์นี้คืออะไร

Landing Page 1 หน้าสำหรับแบรนด์แฟชั่น MAISON  
พัฒนาด้วย Next.js 14 + TypeScript + TailwindCSS v4 + Framer Motion  
**ไม่มี backend, ไม่มี database, ไม่มีระบบ auth**

---

## กฎที่ต้องรู้ก่อนแก้โค้ด

### Styling
- ใช้ **TailwindCSS เท่านั้น** ห้ามเขียน inline style หรือ CSS module
- สีทั้งหมดใช้ `stone-*` เป็นหลัก ห้ามใส่สีใหม่ที่ไม่ match กับ design
- Typography ใช้ class ที่กำหนดไว้แล้วใน `globals.css` เช่น `text-display-xl`, `text-display-md`, `text-label`

### Component
- Component ใหม่ที่เป็น UI ทั่วไป → วางใน `src/components/ui/`
- Component ที่เป็น Section ของหน้า → วางใน `src/components/section/`
- ถ้าต้องการ scroll animation ให้ใช้ `<FadeInWhenVisible>` ครอบ อย่าสร้าง logic ใหม่

### Animation
- Variants ทั้งหมดอยู่ใน `src/lib/motion.ts` ให้ import จากที่นี่
- ห้ามเขียน animation object ซ้ำในแต่ละ component

### ข้อมูล
- ข้อมูลสินค้าและ gallery อยู่ใน `src/constants/index.ts`
- Type ทั้งหมดอยู่ใน `src/types/index.ts` ถ้าเพิ่ม data structure ใหม่ให้เพิ่ม type ที่นี่ด้วย

---

## สิ่งที่ห้ามทำ

- ❌ ห้ามเพิ่ม library ใหม่โดยไม่จำเป็น
- ❌ ห้ามเปลี่ยน font หรือ color palette
- ❌ ห้ามใช้ `<p>` หรือ block element ซ้อนใน `<h1>` / `<h2>`
- ❌ ห้ามเพิ่มระบบ state management (Redux, Zustand ฯลฯ)
- ❌ ห้ามเชื่อม API ภายนอกใด ๆ

---

## วิธีเพิ่ม Section ใหม่

1. สร้างไฟล์ใน `src/components/section/NewSection.tsx`
2. เพิ่ม `<NewSection />` ใน `src/app/page.tsx`
3. ถ้ามีข้อมูล ให้เพิ่มใน `src/constants/index.ts` และ type ใน `src/types/index.ts`

## วิธีเพิ่มสินค้า

แก้ไขที่ `src/constants/index.ts` — array `COLLECTION_PRODUCTS`  
วางรูปภาพใน `public/images/collections/`

---

## คำสั่งที่ใช้บ่อย

```bash
npm run dev      # รัน local
npm run build    # build production
npm run lint     # ตรวจ code
```