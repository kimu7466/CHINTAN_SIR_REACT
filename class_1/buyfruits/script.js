// Function to add new food item dynamically
function addItem() {
    const foodInput = document.getElementById('foodInput');
    const foodList = document.getElementById('foodList');

    // Get the value from the input field
    const newFood = foodInput.value.trim();

    // If input is not empty, add the new item
    if (newFood !== "") {
        // Create new li element for the new food item
        const li = document.createElement('li');
        li.className = 'food-item';

        // Create text node for the food item
        const foodText = document.createTextNode(newFood);
        li.appendChild(foodText);

        // Create the Buy button
        const buyButton = document.createElement('button');
        buyButton.className = 'buy-btn';
        buyButton.innerText = 'Buy';
        buyButton.onclick = function() {
            buyItem(this);
        };

        // Add the button to the li element
        li.appendChild(buyButton);

        // Append the new li to the food list
        foodList.appendChild(li);

        // Clear the input field after adding
        foodInput.value = "";
    }
}

// Function to toggle color to blue when item is "bought"
function buyItem(button) {
    // Get the parent element (li.food-item)
    const foodItem = button.parentElement;

    // Toggle the class to change the color to blue
    foodItem.classList.toggle('bought');
}
