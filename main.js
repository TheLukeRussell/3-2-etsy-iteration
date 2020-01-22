// 1. Show me how to calculate the average price of all items. Please `console.log` the average.

let itemsPrice = items.map((items) => {
  return items.price
});
// console.log(itemsPrice);

let averagePrice = itemsPrice.reduce((acc, i) => {
  return (acc + i);
});
// console.log(averagePrice);

averageTotalPrice = (averagePrice / items.length);
console.log(averageTotalPrice);

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.

let usdFilter = (items) => {
  return items.currency_code === 'USD';
}

let americanItems = items.filter(usdFilter);
let amountFilter = (value)  => {
  return (value.price > 14.00) && (value.price < 18.00)
}
let midPriceItems = americanItems.filter(amountFilter);
console.log('The items that cost between $14.00 USD and $18.00 USD:', midPriceItems);

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.



// 4. Show me how to find which items are made of wood. Please `console.log` the ones you find.



// 5. Show me how to find which items are made of eight or more materials. Please `console.log` the ones you find.



// 6. Show me how to calculate how many items were made by their sellers. Please `console.log` your answer.
