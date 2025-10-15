export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  badge?: string;
}

export interface MenuSection {
  title: string;
  products: Product[];
}

export const menuData: MenuSection[] = [
  {
    title: "Cold Drinks",
    products: [
      {
        id: 1,
        name: "Iced Coffee",
        description: "Chilled coffee with ice cubes, perfect for hot days",
        price: 3.50,
        badge: "Best Seller"
      },
      {
        id: 2,
        name: "Lemonade",
        description: "Freshly squeezed lemons with a hint of mint",
        price: 2.75
      },
      {
        id: 3,
        name: "Fruit Smoothie",
        description: "Blend of seasonal fruits and yogurt",
        price: 4.25
      },
      {
        id: 4,
        name: "Iced Tea",
        description: "Brewed tea served over ice with lemon",
        price: 2.50
      }
    ]
  },
  {
    title: "Hot Drinks",
    products: [
      {
        id: 5,
        name: "Espresso",
        description: "Strong and bold Italian coffee",
        price: 2.25
      },
      {
        id: 6,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 3.75,
        badge: "Popular"
      },
      {
        id: 7,
        name: "Hot Chocolate",
        description: "Rich chocolate with whipped cream",
        price: 3.00
      },
      {
        id: 8,
        name: "Green Tea",
        description: "Traditional Japanese green tea",
        price: 2.00
      }
    ]
  },
  {
    title: "Desserts",
    products: [
      {
        id: 9,
        name: "Chocolate Cake",
        description: "Decadent chocolate cake with frosting",
        price: 5.50,
        badge: "50% Off"
      },
      {
        id: 10,
        name: "Cheesecake",
        description: "Creamy cheesecake with berry topping",
        price: 4.75
      },
      {
        id: 11,
        name: "Brownie",
        description: "Fudgy chocolate brownie",
        price: 3.25
      },
      {
        id: 12,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with toppings",
        price: 4.00
      }
    ]
  },
  {
    title: "Snacks",
    products: [
      {
        id: 13,
        name: "Croissant",
        description: "Buttery French pastry",
        price: 2.50
      },
      {
        id: 14,
        name: "Muffin",
        description: "Fresh baked blueberry muffin",
        price: 2.75
      },
      {
        id: 15,
        name: "Sandwich",
        description: "Ham and cheese on toasted bread",
        price: 6.00
      },
      {
        id: 16,
        name: "Cookies",
        description: "Assortment of chocolate chip cookies",
        price: 3.50
      }
    ]
  }
];
