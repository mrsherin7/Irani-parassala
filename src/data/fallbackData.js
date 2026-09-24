// Fallback/development data for Irani Restaurant Parassala
// Replace all prices, hours, and details with confirmed owner data before launch

export const RESTAURANT_INFO = {
  name: 'Irani Restaurant',
  tagline: 'Authentic flavours. Made to be shared.',
  subTagline: 'Arabian favourites, Kerala classics and delicious dishes served in the heart of Parassala.',
  address: '85V3+62W, Parassala, Kerala 695502',
  phone: '073060 48162',
  phoneClean: '+917306048162',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '', // Set in .env
  openingHours: 'Open daily · Closes around 11:30 PM',
  priceRange: '₹200 – ₹400 per person',
  services: ['Dine-in', 'Drive-through', 'No-contact delivery'],
  mapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL || 'https://maps.google.com/?q=Irani+Restaurant+Parassala+Kerala',
  mapsEmbedUrl: import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || '',
  instagram: '',
  facebook: '',
}

export const MENU_CATEGORIES = [
  { id: 'mandi',   slug: 'mandi',   name: 'Mandi',          display_order: 1, is_active: true },
  { id: 'alfaham', slug: 'alfaham', name: 'Alfaham',        display_order: 2, is_active: true },
  { id: 'biriyani',slug: 'biriyani',name: 'Biriyani',       display_order: 3, is_active: true },
  { id: 'kerala',  slug: 'kerala',  name: 'Kerala Specials',display_order: 4, is_active: true },
  { id: 'chinese', slug: 'chinese', name: 'Chinese',        display_order: 5, is_active: true },
  { id: 'starters',slug: 'starters',name: 'Starters',       display_order: 6, is_active: true },
  { id: 'shawarma',slug: 'shawarma',name: 'Shawarma',       display_order: 7, is_active: true },
  { id: 'beverages',slug:'beverages',name:'Beverages',      display_order: 8, is_active: true },
  { id: 'desserts',slug: 'desserts',name: 'Desserts',       display_order: 9, is_active: true },
]

export const MENU_ITEMS = [
  // MANDI
  {
    id: '1',
    category_id: 'mandi',
    name: 'Chicken Kuzhimandhi',
    slug: 'chicken-kuzhimandhi',
    description: 'Fragrant mandi rice slow-cooked in a clay pit, served with tender grilled chicken, spiced broth and zesty dips.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 1,
  },
  {
    id: '2',
    category_id: 'mandi',
    name: 'Mutton Kuzhimandhi',
    slug: 'mutton-kuzhimandhi',
    description: 'Slow-cooked mandi rice with succulent mutton pieces, saffron broth and traditional Arabian spices.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 2,
  },
  // ALFAHAM
  {
    id: '3',
    category_id: 'alfaham',
    name: 'Chicken Alfaham Quarter',
    slug: 'chicken-alfaham-quarter',
    description: 'Lebanese-style charcoal-grilled chicken marinated with aromatic herbs, served with garlic sauce and flatbread.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 1,
  },
  // BIRIYANI
  {
    id: '4',
    category_id: 'biriyani',
    name: 'Chicken Biriyani',
    slug: 'chicken-biriyani',
    description: 'Fragrant Kerala-style biriyani with tender chicken pieces, caramelised onions and whole spices.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 1,
  },
  // KERALA SPECIALS
  {
    id: '5',
    category_id: 'kerala',
    name: 'Kerala Parotta',
    slug: 'kerala-parotta',
    description: 'Layered, flaky wheat parotta served with a choice of curry — a Kerala classic.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 1,
  },
  {
    id: '6',
    category_id: 'kerala',
    name: 'Beef Roast',
    slug: 'beef-roast',
    description: 'Slow-cooked beef roast with roasted coconut and Kerala spices — pairs perfectly with parotta.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: false,
    display_order: 2,
  },
  // CHINESE
  {
    id: '7',
    category_id: 'chinese',
    name: 'Chilly Chicken',
    slug: 'chilly-chicken',
    description: 'Crispy fried chicken tossed with bell peppers, onions and an Indo-Chinese sauce.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: false,
    display_order: 1,
  },
  // STARTERS
  {
    id: '8',
    category_id: 'starters',
    name: 'Chicken 65',
    slug: 'chicken-65',
    description: 'Spiced fried chicken bites with curry leaves and green chillies — a crowd favourite starter.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: false,
    display_order: 1,
  },
  {
    id: '9',
    category_id: 'starters',
    name: 'Porotta Chicken Fry',
    slug: 'porotta-chicken-fry',
    description: 'Crispy layered parotta served with dry-fried chicken in Kerala spices.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: false,
    display_order: 2,
  },
  // SHAWARMA
  {
    id: '10',
    category_id: 'shawarma',
    name: 'Plate Shawarma',
    slug: 'plate-shawarma',
    description: 'Platter-style shawarma with marinated chicken strips, garlic sauce, vegetables and Arabic bread.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: true,
    display_order: 1,
  },
  // BEVERAGES
  {
    id: '11',
    category_id: 'beverages',
    name: 'Falooda',
    slug: 'falooda',
    description: 'Chilled rose-flavoured milk drink layered with basil seeds, vermicelli and ice cream.',
    price: null,
    image_url: '',
    is_available: true,
    is_featured: false,
    display_order: 1,
  },
]

export const FEATURED_DISHES = MENU_ITEMS.filter(item => item.is_featured).slice(0, 6)

export const GALLERY_ITEMS = [
  { id: '1', title: 'Chicken Kuzhimandhi', category: 'Food',       is_featured: true,  display_order: 1, image_url: '' },
  { id: '2', title: 'Restaurant Interior',  category: 'Interior',  is_featured: false, display_order: 2, image_url: '' },
  { id: '3', title: 'Alfaham Platter',      category: 'Food',       is_featured: true,  display_order: 3, image_url: '' },
  { id: '4', title: 'Ambience Evening',     category: 'Ambience',  is_featured: false, display_order: 4, image_url: '' },
  { id: '5', title: 'Plate Shawarma',       category: 'Food',       is_featured: false, display_order: 5, image_url: '' },
  { id: '6', title: 'Restaurant Exterior',  category: 'Exterior',  is_featured: false, display_order: 6, image_url: '' },
  { id: '7', title: 'Biriyani',             category: 'Food',       is_featured: false, display_order: 7, image_url: '' },
  { id: '8', title: 'Dining Area',          category: 'Restaurant', is_featured: false, display_order: 8, image_url: '' },
]

export const GALLERY_CATEGORIES = ['All', 'Food', 'Restaurant', 'Interior', 'Exterior', 'Ambience']
