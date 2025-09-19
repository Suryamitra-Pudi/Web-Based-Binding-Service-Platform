function calculateTotal() {
    const basePrice = 45;
    const sides = parseFloat(document.getElementById('sides').value);
    const copies = parseInt(document.getElementById('copies').value);
    const graphSheetsChecked = document.getElementById('graphSheets').checked;

    // Calculate printing price (for simplicity, printing price = sides cost per page * copies)
    let printingPrice = sides * copies;

    // If graph sheets are selected, add ₹10 per page for each copy
    if (graphSheetsChecked) {
      printingPrice += 10 * copies;
    }
    
    // Total = base price + printing price
    const total = basePrice + printingPrice;
    document.getElementById('totalPrice').textContent = "₹ " + total;
    return total;
  }
  
  // Optionally, update total when options change.
  document.getElementById('sides').addEventListener('change', calculateTotal);
  document.getElementById('copies').addEventListener('input', calculateTotal);
  document.getElementById('graphSheets').addEventListener('change', calculateTotal);
  
  // Add to cart functionality.
  document.getElementById('addToCart').addEventListener('click', function() {
    const total = calculateTotal();
    const copies = parseInt(document.getElementById('copies').value);
    // Calculate unit price (if copies > 0)
    const unitPrice = copies > 0 ? total / copies : total;
    
    // Retrieve existing cart items from localStorage or initialize an empty array.
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Create a new item object. You can include more details as needed.
    const newItem = {
      name: 'Hard Binding',
      quantity: copies,
      unitPrice: unitPrice,
      total: total
    };

    // Add the new item to the cart.
    cartItems.push(newItem);
    
    // Save the updated cart back to localStorage.
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Hard Binding item added to cart!');
  });
  
  // Calculate total initially.
  calculateTotal();