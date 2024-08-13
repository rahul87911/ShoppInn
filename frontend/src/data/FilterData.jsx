export const color = [
  "white",
  "black",
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "grey",
  "silver",
  "gold",
  "multi",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "pink", label: "Pink" },
      { value: "purple", label: "Purple" },
      { value: "orange", label: "Orange" },
      { value: "brown", label: "Brown" },
      { value: "grey", label: "Grey" },
      { value: "silver", label: "Silver" },
      { value: "gold", label: "Gold" },
      { value: "multi", label: "Multi" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" },
    ],
  },

  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "under_armour", label: "Under Armour" },
      { value: "levi's", label: "Levi's" },
      { value: "h&m", label: "H&M" },
    ],
  },
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
      { value: "unisex", label: "Unisex" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹ 159 To ₹ 399" },
      { value: "399-999", label: "₹ 399 To ₹ 999" },
      { value: "999-1999", label: "₹ 999 To ₹ 1999" },
      { value: "1999-2999", label: "₹ 1999 To ₹ 2999" },
      { value: "2999-4999", label: "₹ 2999 To ₹ 4999" },
    ],
  },

  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "0-10",
        label: "0% To 10%",
      },
      {
        value: "10-20",
        label: "10% To 20%",
      },
      {
        value: "20-30",
        label: "20% To 30%",
      },
      {
        value: "30-40",
        label: "30% To 40%",
      },
      {
        value: "40-50",
        label: "40% To 50%",
      },
      {
        value: "50-above",
        label: "50% And Above",
      },
    ],
  },

  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
