let orders = [
    { id: "Fries", total: 2.50 },
    { id: "Double Cheese Burger", total: 5.00 },
    { id: "Milkshake", total: 4.25 }
];

let total = orders.reduce(
    (acc, currentOrder) => {
        return acc + currentOrder.total;
    }, 0
);

console.log(total);