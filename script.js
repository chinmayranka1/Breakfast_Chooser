// Fixed and alternating breakfast items
const fixedItems = ["Chai", "Bread"];
const alternatingItems = ["Poha","Upma","Appe-Khandwa", "Aloo Sandwich", "Biri", "Dollar Chane", "Kale Chane", "Khandwa","Mogar","Besan Bread","Chawle","Paranthe"];

let history = []; // Store last 3 breakfasts

function getBreakfast() {
  // Filter out last 3 choices
  const availableItems = alternatingItems.filter(item => !history.includes(item));

  // If fewer than 1 item left, reset history
  if (availableItems.length === 0) {
    history = [];
    availableItems.push(...alternatingItems);
  }

  // Random choice
  const randomIndex = Math.floor(Math.random() * availableItems.length);
  const chosenItem = availableItems[randomIndex];

  // Update history (keep only last 3)
  history.unshift(chosenItem);
  if (history.length > 3) history.pop();

  // Display breakfast suggestion
  document.getElementById("breakfastDisplay").textContent = 
    `${fixedItems.join(", ")} + ${chosenItem}`;
}

// Button event
document.getElementById("generateBtn").addEventListener("click", getBreakfast);
