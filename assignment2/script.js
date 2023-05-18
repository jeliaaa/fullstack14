var priceData = [
    {item: "Ice Cream", description: "Tolia", price : "0.4$"},
    {item: "Ice Cream", description: "Nuvo", price : "1$"},
    {item: "Fizzy Drink", description: "Coca-Cola", price : "0.7$"}
];
$.each(priceData, function(i, priceItem){
    $('#priceTable tbody').append("<tr><td>" + priceItem.item + "</td><td>" + priceItem.description + "</td><td>" + priceItem.price + "</td></tr>")
});