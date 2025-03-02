////////////////////////////////
// Task 1: Business Dashboard //
////////////////////////////////

console.log("--------------------------------------");
console.log("Task 1: Business Dashboard");

const idDashboard = document.getElementById("dashboard");
const selDashboard = document.querySelector("#dashboard");   // not sure exactly what I'm to do with both

if (idDashboard) {
    // create a <div> element
    const card = document.createElement("div");

    // add class and id attributes
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", "revenueCard");

    // set the card data
    card.innerHTML = `<h3>Revenue</h3>
                      <p>$0</p>`;

    // append the card to the dashboard
    idDashboard.appendChild(card);
}

////////////////////////////////////////
// Task 2: Updating Dashboard Metrics //
////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 2: Updating Dashboard Metrics");

// select all cards based on class name
const cards = document.querySelectorAll(".metric-card");

if (cards) {
    // convert list to array
    const cardsArray = Array.from(cards);

    // set background color of each card found
    cardsArray.forEach(card => {
        card.style.backgroundColor = "lightcoral";
    });
}

//////////////////////////////////////////
// Task 3: Dynamic Inventory Management //
//////////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 3: Dynamic Inventory Management");

let cnt = 0;

// function to add a line item to the <ul> element
function addInventoryItem(item) {

    // create a <li> element
    const lineItem = document.createElement("li");

    // add class and id attributes
    lineItem.setAttribute("class", "product-item");
    lineItem.textContent = item + " " + cnt++;

    // add a click event listener and remove the item if clicked
    lineItem.addEventListener("click", () => {
        removeLineItem(lineItem);
    })

    // append the line item to the <ul> element
    const itemList = document.getElementById("inventoryList");
    if (itemList) {
        itemList.appendChild(lineItem);
    }
}

// function to remove a line item
function removeLineItem(item) {
    document.getElementById("inventoryList").removeChild(item);
}

///////////////////////////////////////
// Task 4: Business Customer Section //
///////////////////////////////////////

console.log("--------------------------------------");
console.log("Task 4: Business Customer Section");

// add a click event listner to the parent
const customerSection = document.getElementById("customerSection");
if (customerSection) {

    customerSection.addEventListener("click", () => {
        console.log("Parent Container Clicked");
    });
}

// dynamically create customer card and add to parent
function addCustomer(name) {
    if (customerSection) {
        const card = document.createElement("div");

        // add class attribute
        card.setAttribute("class", "customer-card");

        // set the card data
        card.innerHTML = "<h3>" + name + "</h3>";

        card.addEventListener("click", (event) => {
            console.log("Customer Card Clicked");
            event.stopPropagation();     // comment out this line to see event bubble to parent
        })

        // append the card to the dashboard
        customerSection.appendChild(card);
    }
}

addCustomer("John Doe");
addCustomer("Sally Mae");
addCustomer("Maximus Decimus Meridius");

