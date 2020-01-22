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
console.log((`The total average price for all of the items is $${averageTotalPrice.toFixed(2)}`));

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.

let usdFilter = (items) => {
  return items.currency_code === 'USD';
}

let americanItems = items.filter(usdFilter);
let amountFilter = (items) => {
  return (items.price >= 14.00) && (items.price <= 18.00)
}
let midPriceItems = americanItems.filter(amountFilter);
console.log('The items that cost between $14.00 USD and $18.00 USD:', midPriceItems);

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.

let gbpFilter = (items) => {
  return items.currency_code === 'GBP';
}
let ukItem = items.filter(gbpFilter);
let ukItemTitle = ukItem.map((items) => {
  return items.title;
});
let ukItemPrice = ukItem.map((items) => {
  return items.price;
});
console.log(`The lone UK item is the ${ukItemTitle} and it costs ${ukItemPrice} pounds`);


// 4. Show me how to find which items are made of wood. Please `console.log` the ones you find.

let materials = items.filter((items) => {
  return items.materials.includes('wood')
});
let woodItems = materials.map((items) => {
  return items.title;
})
console.log(`If you're looking for items that include wood, look through these items: ${woodItems}`);

// 5. Show me how to find which items are made of eight or more materials. Please `console.log` the ones you find.

let eightPlusMats = items.filter((items) => {
  return items.materials.length > 8;
})

let itemTitles = eightPlusMats.map((items) => {
  return items.title;

});

let itemMats = eightPlusMats.map((items) => {
  return items.materials;
})

console.log(`${itemTitles[0]} uses ${itemMats[0].length} materials which includes a ${itemMats[0]}`);
console.log(`Also ${itemTitles[1]} uses ${itemMats[1].length} materials which includes a ${itemMats[1]}`);

// 6. Show me how to calculate how many items were made by their sellers. Please `console.log` your answer.

let whoMade = items.filter((items) => {
  return items.who_made === 'i_did';
});

let whoMadeItem = whoMade.map((items) => {
  return items.title;
})
console.log(`${whoMadeItem.length} items were made by their sellers`);
