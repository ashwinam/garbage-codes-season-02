// 4 Pillars Of DOM (Document Object Model)

// 1. Selecting an element
// 2. Changing an HTML
// 3. Changing CSS
// 4. Event Listener


let h = document.querySelector('h1'); // selecting element
const name = "Ashwin";
h.innerText = `Hello, ${name}`; // Changing HTML

h.style.color = "lightBlue"; // changing css

h.addEventListener("click", () => {
    h.innerText = "This HTML is changed after click."
    console.log('I am clicked.');
}) // Event Listener