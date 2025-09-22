// portfolio.js


// Create main elements
const body = document.body;
body.style.fontFamily = "Arial, sans-serif";
body.style.backgroundColor = "#f4f4f4";
body.style.margin = "0";
body.style.padding = "0";


// Header
const header = document.createElement("header");
header.style.backgroundColor = "#333";
header.style.color = "white";
header.style.padding = "20px 0";
header.style.textAlign = "center";


const h1 = document.createElement("h1");
h1.textContent = "Mable Angelina";
header.appendChild(h1);


const pHeader = document.createElement("p");
pHeader.textContent = "2nd Year BSc Information Technology Student";
header.appendChild(pHeader);


body.appendChild(header);


// Navigation
const nav = document.createElement("nav");
nav.style.textAlign = "center";
nav.style.margin = "15px 0";


const links = ["About Me", "Education", "Skills"];
links.forEach(text => {
    const a = document.createElement("a");
    a.href = "#" + text.toLowerCase().replace(" ", "");
    a.textContent = text;
    a.style.margin = "0 15px";
    a.style.textDecoration = "none";
    a.style.color = "#333";
    a.style.fontWeight = "bold";
    a.onmouseover = () => a.style.color = "#007BFF";
    a.onmouseout = () => a.style.color = "#333";
    nav.appendChild(a);
});


body.appendChild(nav);


// Section Creator Function
function createSection(id, title, contentArray) {
    const section = document.createElement("section");
    section.id = id;
    section.style.padding = "20px";
    section.style.maxWidth = "800px";
    section.style.margin = "auto";
    section.style.backgroundColor = "white";
    section.style.marginBottom = "20px";
    section.style.borderRadius = "8px";
    section.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";


    const h2 = document.createElement("h2");
    h2.textContent = title;
    h2.style.color = "#333";
    section.appendChild(h2);


    if (Array.isArray(contentArray)) {
        const ul = document.createElement("ul");
        contentArray.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
        section.appendChild(ul);
    } else {
        const p = document.createElement("p");
        p.innerHTML = contentArray;
        section.appendChild(p);
    }


    body.appendChild(section);
}


// About Me
createSection("about", "About Me", "Hello! I am <strong>Mable Angelina</strong>, a 2nd-year BSc Information Technology student. I am passionate about coding, web development, and learning new technologies. I love creating simple and interactive web projects.");


// Education
createSection("education", "Education", [
    "BSc Information Technology - 2nd Year",
    "PPG College of Arts and Science"
]);


// Skills
createSection("skills", "Skills", [
    "HTML, CSS, JavaScript",
    "Basic Web Development",
    "Problem Solving & Logical Thinking"
]);


// Footer
const footer = document.createElement("footer");
footer.style.backgroundColor = "#333";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px 0";
footer.innerHTML = "&copy; 2025 Mable Angelina | All Rights Reserved";
body.appendChild(footer);