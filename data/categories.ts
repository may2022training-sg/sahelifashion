import { Category } from '@/types'
import { luxuryImages } from './unsplashImages'

export const CATEGORIES = [
  { id: 'kurti', titleEn: 'Kurti', titleGu: 'કુર્તી', image: '/images/cat-kurti.jpg', photoUrl: 'https://photos.app.goo.gl/ovqk5dtyphK4SthG7' },
  { id: '2-pc-pair', titleEn: '2 Pc Pair', titleGu: '2 પીસ પેર', image: '/images/cat-2pc-pair.jpg', photoUrl: 'https://photos.app.goo.gl/GoPxyBTinVELhe6H8' },
  { id: '3-pc-pair', titleEn: '3 Pc Pair', titleGu: '3 પીસ પેર', image: '/images/cat-3pc-pair.jpg', photoUrl: 'https://photos.app.goo.gl/wtPJQ36byjuH6dmY8' },
  { id: 'co-ord-set', titleEn: 'Co-ord Set', titleGu: 'કો-ઓર્ડ સેટ', image: '/images/cat-coord-set.jpg', photoUrl: 'https://photos.app.goo.gl/r5fKsohWV8J4jrUc7' },
  { id: 'cotton-pant', titleEn: 'Cotton Pant', titleGu: 'કોટન પેન્ટ', image: '/images/cat-cotton-pant.jpg', photoUrl: 'https://photos.app.goo.gl/eD8CuatWUhgMBHc69' },
  { id: 'korean-plaza-pant', titleEn: 'Korean Plaza Pant', titleGu: 'કોરિયન પ્લાઝા પેન્ટ', image: '/images/cat-korean-plaza-pant.jpg', photoUrl: 'https://photos.app.goo.gl/AtZ43ha2A2ttdZgF7' },
  { id: 't-shirt', titleEn: 'T-Shirt', titleGu: 'ટી-શર્ટ', image: '/images/cat-tshirt.jpg', photoUrl: 'https://photos.app.goo.gl/wL7x5wYbGFtDhoM4A' },
  { id: 'choli', titleEn: 'Choli', titleGu: 'ચોળી', image: '/images/cat-choli.jpg', photoUrl: 'https://photos.app.goo.gl/KNWTPrVgVDMjL22w7' },
  { id: 'western-choli', titleEn: 'Western Choli', titleGu: 'વેસ્ટર્ન ચોળી', image: '/images/cat-western-choli.jpg', photoUrl: 'https://photos.app.goo.gl/n9EvRgMWoUwR7BWVA' },
  { id: 'night-suit', titleEn: 'Night Suit', titleGu: 'નાઇટ સૂટ', image: '/images/cat-night-suit.jpg', photoUrl: 'https://photos.app.goo.gl/XNVBFaqoigSjt1Ad9' },
  { id: 'jeans-pant', titleEn: 'Jeans Pant', titleGu: 'જીન્સ પેન્ટ', image: '/images/cat-jeans-pant.jpg', photoUrl: 'https://photos.app.goo.gl/eC5PhQqP8TwiVjo49' },
  { id: 'saree', titleEn: 'Saree', titleGu: 'સાડી', image: '/images/cat-saree.jpg', photoUrl: 'https://photos.app.goo.gl/539uocdM9zDqNQUa8' },
  { id: 'dress-material', titleEn: 'Dress Material', titleGu: 'ડ્રેસ મટિરિયલ', image: '/images/cat-dress-material.jpg', photoUrl: 'https://photos.app.goo.gl/p3Z5YRUL2kyivMxt9' },
  { id: 'garments', titleEn: 'Garments', titleGu: 'ગારમેન્ટ્સ', image: '/images/cat-garments.jpg', photoUrl: 'https://photos.app.goo.gl/kMQ5AAZF2aqRGunm6' },
  { id: 'baby-clothes', titleEn: 'Baby Clothes', titleGu: 'બાળકોના કપડાં', image: '/images/cat-baby-clothes.jpg', photoUrl: 'https://photos.app.goo.gl/dYcJU824XEY5sKm29' },
]

export const categories: Category[] = [
  {
    id: 'cat-sarees',
    slug: 'sarees',
    name: 'Sarees',
    description: 'Timeless handloom Banarasi, Kanjivaram, Chanderi, and Silk Sarees crafted by traditional weavers.',
    image: luxuryImages.categories.sarees,
    bannerImage: luxuryImages.categories.sarees,
  },
  {
    id: 'cat-lehengas',
    slug: 'lehengas',
    name: 'Designer Lehengas',
    description: 'Exquisite bridal and festive lehengas decorated with hand zardosi, gota patti, and sequins.',
    image: luxuryImages.categories.lehengas,
    bannerImage: luxuryImages.categories.lehengas,
  },
  {
    id: 'cat-suits',
    slug: 'kurties-suits',
    name: 'Kurties & Suits',
    description: 'Contemporary Anarkalis, Sharara sets, and straight-cut handloom suit sets for effortless elegance.',
    image: luxuryImages.categories.suits,
    bannerImage: luxuryImages.categories.suits,
  },
  {
    id: 'cat-designer',
    slug: 'designer-wear',
    name: 'Designer Wear',
    description: 'Exclusive, limited-run Indo-Western silhouettes and bespoke couture for special celebrations.',
    image: luxuryImages.categories.designer,
    bannerImage: luxuryImages.categories.designer,
  },
]