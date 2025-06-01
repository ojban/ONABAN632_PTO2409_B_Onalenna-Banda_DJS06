// Data Sets
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Exercise 1: ForEach Basics

names.forEach((name) => console.log(name));

provinces.forEach((prov) => console.log(prov));

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Exercise 2: Uppercase Transformation
const provincesUpper = provinces.map((province) => province.toUpperCase());
console.log("Uppercase Provinces:", provincesUpper);

//Exercise 3: Name Lengths
const nameLengths = names.map((name) => name.length);
console.log("Name Lengths:", nameLengths);

//Exercise 4:Alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort((a, b) => a.localeCompare(b));
console.log("Sorted Provinces:", sortedProvinces);

//Exercise 5: Filtering Cape
const provincesWithoutCape = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log('Count of provinces without "Cape":', provincesWithoutCape.length);

//Exercise 6: Finding 'S'
const containsS = names.map((name) =>
  name.split("").some((letter) => letter.toLowerCase() === "s")
);
console.log('Does each name contain "S":', containsS);

//Exercise 7: Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log("Name to Province Mapping:", nameProvinceMapping);

// 1. Log Products: Create an array of product names.
const productNames = products.map((product) => product.product);

// 2. Filter by Name Length: Filter out products with names longer than 5 characters.
const filteredByNameLength = products.filter(
  (product) => product.product.length <= 5
); // <= 5 characters

// 3. Price Manipulation:
const validPricedProducts = products.filter(
  (product) => product.price.toString().trim() !== ""
);
const totalPrice = validPricedProducts.reduce((sum, product) => {
  return sum + Number(product.price);
}, 0);

// 4. Concatenate Product Names
const concatenatedNames = products.reduce(
  (acc, product) => acc + product.product,
  ""
);

// 5. Find Extremes in Prices:
const highestPriceProduct = validPricedProducts.reduce((prev, cur) => {
  return Number(cur.price) > Number(prev.price) ? cur : prev;
});
const lowestPriceProduct = validPricedProducts.reduce((prev, cur) => {
  return Number(cur.price) < Number(prev.price) ? cur : prev;
});
const extremes = `Highest: ${highestPriceProduct.product}. Lowest: ${lowestPriceProduct.product}.`;

// 6. Object Transformation:
const transformedProducts = products.map((prod) => {
  return Object.entries(prod).reduce((acc, [key, value]) => {
    if (key === "product") {
      acc.name = value;
    } else if (key === "price") {
      acc.cost = value;
    }
    return acc;
  }, {});
});

// Consolidated advanced exercise output in a single console.log statement:
console.log(
  "Advanced Exercises Result:\n\n" +
    "1. Products: " +
    productNames.join(", ") +
    "\n" +
    "2. Filtered by Name Length (<= 5): " +
    filteredByNameLength.map((p) => p.product).join(", ") +
    "\n" +
    "3. Total Price (after filtering & conversion): " +
    totalPrice +
    "\n" +
    "4. Concatenated Product Names: " +
    concatenatedNames +
    "\n" +
    "5. Price Extremes: " +
    extremes +
    "\n" +
    "6. Transformed Products: " +
    JSON.stringify(transformedProducts, null, 2)
);
