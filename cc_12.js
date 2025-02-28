////////////////////////////////
// Task 1: Business Dashboard //
////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Business Dashboard");

const idDashboard = document.getElementById("dashboard");

const selDashboard = document.querySelector("#dashboard");

if (idDashboard) {
    const card = document.createElement("div");
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", "revenueCard");
    card.innerHTML = `
        <h3>Revenue</h3>
        <p>$0</p>
    `;
    idDashboard.appendChild(card);
}

////////////////////////////////////////
// Task 2: Updating Dashboard Metrics //
////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Updating Dashboard Metrics");

const cards = document.querySelectorAll(".metric-card");

const cardsArray = Array.from(cards);

cardsArray.forEach(card => {
    card.style.backgroundColor = "lightcoral";
});

//////////////////////////////////////////
// Task 3: Dynamic Inventory Management //
//////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Dynamic Inventory Management");

let  cnt = 0;

function addLineItem() {
    const lineItem = document.createElement("li");
    lineItem.setAttribute("class", "product-item");
    lineItem.textContent = "test-item " + cnt++;

    lineItem.addEventListener("click", () => {
        removeLineItem(lineItem);
    })

    const itemList = document.getElementById("inventoryList");
    if (itemList) {
        itemList.appendChild(lineItem);
    }
}

function removeLineItem(item) {
    document.getElementById("inventoryList").removeChild(item);
}

///////////////////////////////////////
// Task 4: Business Customer Section //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Business Customer Section");

const customerSection = document.getElementById("customerSection");

customerSection.addEventListener("click", () => {
    console.log("Parent Container Clicked");
})

const customerCards = document.querySelectorAll(".customer-card");

customerCards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer Card Clicked");
        event.stopPropagation();
    })
})


