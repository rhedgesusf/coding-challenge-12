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

