enum Category {
  Fruit,
  Bakery,
  Dairy,
  Meat,
  Pantry,
  Vegetables,
  Beverages,
}

type Item = {
  name: string;
  quantity: number;
  price: number;
  image: string;
  category: Category;
  isFavorite: boolean;
};

export const groceryItems: Item[] = [
  {
    name: "Apples",
    quantity: 3,
    price: 2.99,
    image: "apple.png",
    category: Category.Fruit,
    isFavorite: false,
  },
  {
    name: "Bananas",
    quantity: 5,
    price: 1.99,
    image: "banana.png",
    category: Category.Fruit,
    isFavorite: false,
  },
  {
    name: "Bread",
    quantity: 1,
    price: 3.49,
    image: "bread.png",
    category: Category.Bakery,
    isFavorite: false,
  },
  {
    name: "Milk",
    quantity: 1,
    price: 2.99,
    image: "milk.png",
    category: Category.Dairy,
    isFavorite: false,
  },
  {
    name: "Eggs",
    quantity: 12,
    price: 4.99,
    image: "eggs.png",
    category: Category.Dairy,
    isFavorite: false,
  },
  {
    name: "Cheese",
    quantity: 1,
    price: 5.99,
    image: "cheese.png",
    category: Category.Dairy,
    isFavorite: false,
  },
  {
    name: "Chicken",
    quantity: 2,
    price: 8.99,
    image: "chicken.png",
    category: Category.Meat,
    isFavorite: false,
  },
  {
    name: "Beef",
    quantity: 1,
    price: 12.99,
    image: "beef.png",
    category: Category.Meat,
    isFavorite: false,
  },
  {
    name: "Pasta",
    quantity: 2,
    price: 1.99,
    image: "pasta.png",
    category: Category.Pantry,
    isFavorite: false,
  },
  {
    name: "Rice",
    quantity: 1,
    price: 3.99,
    image: "rice.png",
    category: Category.Pantry,
    isFavorite: false,
  },
  {
    name: "Tomatoes",
    quantity: 4,
    price: 1.49,
    image: "tomatoes.png",
    category: Category.Vegetables,
    isFavorite: false,
  },
  {
    name: "Cucumbers",
    quantity: 2,
    price: 0.99,
    image: "cucumbers.png",
    category: Category.Vegetables,
    isFavorite: false,
  },
  {
    name: "Carrots",
    quantity: 3,
    price: 1.29,
    image: "carrots.png",
    category: Category.Vegetables,
    isFavorite: false,
  },
  {
    name: "Potatoes",
    quantity: 5,
    price: 2.99,
    image: "potatoes.png",
    category: Category.Vegetables,
    isFavorite: false,
  },
  {
    name: "Soda",
    quantity: 6,
    price: 4.99,
    image: "soda.png",
    category: Category.Beverages,
    isFavorite: false,
  },
  {
    name: "Juice",
    quantity: 2,
    price: 3.49,
    image: "juice.png",
    category: Category.Beverages,
    isFavorite: false,
  },
  {
    name: "Water",
    quantity: 1,
    price: 1.99,
    image: "water.png",
    category: Category.Beverages,
    isFavorite: false,
  },
];
