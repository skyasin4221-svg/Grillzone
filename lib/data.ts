import {
  Award,
  Beef,
  Clock,
  Flame,
  Leaf,
  MapPin,
  ShieldCheck,
  Star,
  Truck
} from "lucide-react";

export const site = {
  name: "Grill Zone Original",
  phone: "+44 1206 617250",
  whatsapp: "441206617250",
  address: "120 High St, Colchester CO1 1SZ",
  email: "hello@grillzoneoriginal.co.uk",
  orderUrl: "https://deliveroo.co.uk/menu/colchester/colchester/grill-zone-original",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Grill%20Zone%20Original%20120%20High%20St%20Colchester%20CO1%201SZ",
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/grillzoneoriginal?igsh=djdmZ2t0ejY1andk"
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@grillzone2?_r=1&_t=ZN-979h2XOJRSQ"
    }
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const images = {
  hero: "/images/grillzone-hero-luxury.png",
  counterMeals:
    "https://img3.restaurantguru.com/c844-Restaurant-Grill-Zone-Original-meals.jpg",
  interior:
    "https://img3.restaurantguru.com/cd88-Grill-Zone-Original-Colchester-interior.jpg",
  curryCounter:
    "https://img3.restaurantguru.com/c4a7-Restaurant-Grill-Zone-Original-chicken-curry.jpg",
  burger:
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85",
  steakBurger:
    "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=85",
  fried:
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=85",
  wings:
    "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=85",
  bucket:
    "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=85",
  peri:
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=85",
  grill:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
  shish:
    "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=85",
  wrap:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=85",
  doner:
    "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?auto=format&fit=crop&w=1200&q=85",
  rice:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85",
  curry:
    "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=1200&q=85",
  sunday:
    "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=1200&q=85",
  drinks:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=85",
  team:
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85",
  restaurant:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85"
};

export const featuredDishes = [
  {
    title: "Peri Peri Chicken Meal",
    text: "Fresh peri peri chicken served as a full meal with bold grilled flavour.",
    image: images.peri,
    price: "£18.00"
  },
  {
    title: "Mix Grill Burger",
    text: "A signature grilled burger meal with fresh toppings and house sauce.",
    image: images.burger,
    price: "£8.00"
  },
  {
    title: "Sunday Halwa Puri & Channa",
    text: "A proper Sunday special with halwa puri and channa from the real menu.",
    image: images.sunday,
    price: "£8.50"
  }
];

export const whyChooseUs = [
  {
    title: "Fresh Every Day",
    text: "Chicken, salad and marinades are prepared in small batches for peak flavour.",
    icon: Leaf
  },
  {
    title: "Flame-Grilled Finish",
    text: "Our grill locks in smoky flavour, charred edges and proper restaurant texture.",
    icon: Flame
  },
  {
    title: "Fast Local Delivery",
    text: "Hot food, sturdy packaging and reliable collection or delivery windows.",
    icon: Truck
  },
  {
    title: "Quality Promise",
    text: "Clean kitchens, careful sourcing and a team that takes every order seriously.",
    icon: ShieldCheck
  }
];

export const stats = [
  { label: "Menu favourites", value: 40, suffix: "+" },
  { label: "Colchester High Street restaurant", value: 1, suffix: "" },
  { label: "Public review votes", value: 88 }
];

export const testimonials = [
  {
    name: "Aisha K.",
    text: "The peri peri chicken is smoky, juicy and properly spiced. This has become our Friday night order.",
    rating: 5
  },
  {
    name: "Daniel M.",
    text: "Premium feel without silly prices. Burgers are stacked, fries arrive crisp and the sauces are excellent.",
    rating: 5
  },
  {
    name: "Samira H.",
    text: "Clean restaurant, friendly staff and consistent family buckets. The kids ask for Grill Zone by name.",
    rating: 5
  }
];

export const menuCategories = [
  {
    name: "Fried Chicken",
    image: images.wings,
    items: [
      ["2 Pieces Chicken Meal", "Crispy fried chicken meal.", "£6.00"],
      ["1 Piece Chicken & 3 Wings Meal", "One piece of chicken with three wings.", "£6.00"],
      ["4 Pieces Chicken & 3 Wings Meal", "Four pieces of chicken with three wings.", "£7.00"],
      ["3 Pieces Chicken Meal", "Three pieces of crispy fried chicken.", "£7.00"],
      ["6 Pieces Chicken Wings Meal", "Six crispy chicken wings meal.", "£6.00"],
      ["15 Wings Special Offer", "Includes 2 fries and 2 drinks.", "£12.00"]
    ]
  },
  {
    name: "Family Buckets",
    image: images.bucket,
    items: [
      ["Large Family Bucket", "10 pieces chicken, 10 wings, 4 regular fries and 1.5L bottle drink.", "£17.00"],
      ["Mini Family Bucket", "6 pieces chicken, 6 wings, 2 regular fries and 2 cans of drink.", "£13.00"]
    ]
  },
  {
    name: "Burgers",
    image: images.steakBurger,
    items: [
      ["Quarter Pounder Burger Meal", "Classic quarter pounder burger meal.", "£7.00"],
      ["Half Pounder Burger Meal", "Hearty half pounder burger meal.", "£6.00"],
      ["Double Cheese Burger Meal", "Double cheese burger meal.", "£6.00"],
      ["Single Cheese Burger Meal", "Single cheese burger meal.", "£4.50"],
      ["Veggie Burger Meal", "Veggie burger meal.", "£4.50"],
      ["Chicken Steak Burger Meal", "Chicken steak burger meal.", "£4.50"],
      ["Spicy Crunch Burger Meal", "Crispy chicken burger with spicy crunch.", "£6.00"],
      ["Mix Grill Burger Meal", "Signature grilled burger meal.", "£8.00"],
      ["Peri Peri Burger Meal", "Peri peri burger meal.", "£6.50"],
      ["Fillet Burger Meal", "Chicken fillet burger meal.", "£5.00"],
      ["Tower Burger Meal", "Loaded tower burger meal.", "£5.50"],
      ["Mexican Burger Meal", "Mexican-style burger meal.", "£6.50"]
    ]
  },
  {
    name: "Doner & Wraps",
    image: images.doner,
    items: [
      ["Chicken Doner (Regular)", "Chicken doner with fresh naan bread.", "£7.50"],
      ["Chicken Doner (Large)", "Large chicken doner with fresh naan bread.", "£8.50"],
      ["Lamb Doner (Regular)", "Lamb doner with fresh naan bread.", "£7.50"],
      ["Lamb Doner (Large)", "Large lamb doner with fresh naan bread.", "£8.50"],
      ["Special Mix Doner", "Mixed doner special.", "£9.50"],
      ["Lamb or Chicken Meat & Chips (Regular)", "Regular meat and chips.", "£7.00"],
      ["Lamb or Chicken Meat & Chips (Large)", "Large meat and chips.", "£8.00"],
      ["Lamb Doner Wrap Meal", "Lamb doner wrap meal.", "£8.00"],
      ["Chicken Doner Wrap Meal", "Chicken doner wrap meal.", "£8.00"],
      ["Peri Peri Wrap Meal", "Peri peri chicken wrap meal.", "£7.50"],
      ["Veggie Wrap Meal", "Veggie wrap meal.", "£6.00"],
      ["Mix Doner Wrap Meal", "Mixed doner wrap meal.", "£9.00"],
      ["Chicken Fillet Wrap Meal", "Chicken fillet wrap meal.", "£6.00"]
    ]
  },
  {
    name: "Grill",
    image: images.shish,
    items: [
      ["Kebab Roll + Fresh Naan Bread", "Kebab roll served with fresh naan bread.", "£6.00"],
      ["Chicken Shish + Fresh Naan Bread", "Chicken shish served with fresh naan bread.", "£9.00"],
      ["Lamb Shish + Fresh Naan Bread", "Lamb shish served with fresh naan bread.", "£10.00"]
    ]
  },
  {
    name: "Peri Peri Chicken",
    image: images.grill,
    items: [
      ["Half Chicken", "Flame-grilled peri peri half chicken.", "£7.50"],
      ["Medium Chicken", "Medium peri peri chicken portion.", "£9.50"],
      ["Full Chicken", "Full peri peri chicken.", "£14.00"],
      ["Peri Peri Chicken Meal", "Peri peri chicken meal.", "£18.00"]
    ]
  },
  {
    name: "Rice Dishes",
    image: images.rice,
    items: [
      ["Chicken Pulao", "Chicken pulao rice dish.", "£9.00"],
      ["Kabli Pulao", "Kabli pulao rice dish.", "£10.00"],
      ["Mix Biryani (Regular)", "Regular mixed biryani.", "£7.50"],
      ["Mix Biryani with Topping", "Mixed biryani with topping.", "£10.00"],
      ["Plain Rice with Curry", "Plain rice served with curry.", "£7.00"],
      ["Plain Rice", "Plain rice side.", "£4.00"]
    ]
  },
  {
    name: "Curry Dishes",
    image: images.curryCounter,
    items: [
      ["Chicken Curry + 2 Naan", "Chicken curry served with two naan.", "£8.50"],
      ["Lamb Curry + 2 Naan", "Lamb curry served with two naan.", "£8.50"],
      ["Qeema Curry + 2 Naan", "Qeema curry served with two naan.", "£8.50"],
      ["Curry Only", "Curry only.", "£7.00"],
      ["Kari Curry + 2 Naan", "Kari curry served with two naan.", "£7.50"],
      ["Channa Curry + 2 Naan", "Channa curry served with two naan.", "£7.50"],
      ["Vegetable Curry + 2 Naan", "Vegetable curry served with two naan.", "£7.50"],
      ["Kari / Channa / Vegetable Curry Only", "Curry only option.", "£6.00"],
      ["Chicken Karahi + 2 Naan", "Chicken karahi served with two naan.", "£9.50"]
    ]
  },
  {
    name: "Sunday Nashta",
    image: images.sunday,
    items: [
      ["Halwa Puri + Channa", "Sunday-only breakfast special.", "£8.50"],
      ["Nihari (2 Naan or 2 Paratha)", "Sunday-only nihari with naan or paratha.", "£10.00"],
      ["Paaye (2 Naan or 2 Paratha)", "Sunday-only paaye with naan or paratha.", "£10.00"],
      ["Channa (2 Naan or 2 Paratha)", "Sunday-only channa with naan or paratha.", "£8.00"]
    ]
  },
  {
    name: "Extras",
    image: images.wrap,
    items: [
      ["Halwa", "Extra halwa portion.", "£4.00"],
      ["Naan", "Fresh naan.", "£2.00"],
      ["Paratha", "Fresh paratha.", "£2.00"],
      ["Puri", "Extra puri.", "£1.00"]
    ]
  },
  {
    name: "Drinks",
    image: images.drinks,
    items: [
      ["Lassi", "Fresh lassi.", "£3.00"],
      ["Karak Chai", "Karak chai.", "£3.00"],
      ["Can Drink", "Chilled can drink.", "£1.50"]
    ]
  },
  {
    name: "Signature Items",
    image: images.counterMeals,
    items: [
      ["Mix Grill Burger", "Signature item.", "£8.00"],
      ["Special Mix Doner", "Signature item.", "£9.50"],
      ["Peri Peri Chicken Meal", "Signature item.", "£18.00"],
      ["Chicken Karahi", "Signature item.", "£9.50"],
      ["Kabli Pulao", "Signature item.", "£10.00"],
      ["15 Wings Special", "Signature item.", "£12.00"],
      ["Large Family Bucket", "Signature item.", "£17.00"]
    ]
  }
];

export const galleryImages = [
  { src: images.counterMeals, alt: "Meals at Grill Zone Original", tall: true },
  { src: images.interior, alt: "Interior of Grill Zone Original" },
  { src: images.steakBurger, alt: "Premium stacked chicken burger" },
  { src: images.fried, alt: "Crispy fried chicken close up", tall: true },
  { src: images.peri, alt: "Peri peri grilled chicken" },
  { src: images.restaurant, alt: "Warm modern restaurant interior" },
  { src: images.shish, alt: "Mixed grill with char marks", tall: true },
  { src: images.rice, alt: "Seasoned rice dish" },
  { src: images.curry, alt: "Fresh curry dish" },
  { src: images.wrap, alt: "Loaded wrap and fries" }
];

export const values = [
  { title: "Original Recipes", icon: Award },
  { title: "Fresh Meat", icon: Beef },
  { title: "Open Daily", icon: Clock },
  { title: "Local Favourite", icon: Star },
  { title: "Easy To Find", icon: MapPin }
];
