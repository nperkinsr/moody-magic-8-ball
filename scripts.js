const messages = [
  "Sure, but you'll regret it",
  "Yes, but I'm judging you",
  "Fine, but don't make it weird",
  "Flip a coin, I'm busy",
  "Sure, what could go wrong?",
  "Ask me after coffee",
  "I'm buffering, try later",
  "That is classified",
  "Try bribing me first",
  "Busy, come back never",
  "LOL, bless your heart",
  "Dream on, superstar",
  "You really thought, eh? Cute",
  "No. Also, seek help",
  "I'd say yes, but nah",
  "Not even in your dreams",
  "Are you talking to me, punk?",
  "Eww... don't touch me",
  "Did you even wash your hands first?",
];

function wrapTextIntoTriangle(textElement, message) {
  const words = message.split(" ");
  let lines = [];
  let currentLine = "";

  words.forEach((word) => {
    let testLine = currentLine.length === 0 ? word : currentLine + " " + word;
    if (testLine.length < 15) {
      // Approximate character limit per line
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });
  lines.push(currentLine);

  textElement.innerHTML = ""; // Clear previous text

  const totalLines = lines.length;
  const startY = 20 - (totalLines - 1) * 6; // Adjust starting Y position

  lines.forEach((line, index) => {
    let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.setAttribute("x", "50%");
    tspan.setAttribute("dy", index === 0 ? `${startY}%` : "1.2em");
    tspan.textContent = line;
    textElement.appendChild(tspan);
  });
}

function handleClick() {
  const textElement = document.getElementById("text");
  textElement.style.opacity = "0";

  setTimeout(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    wrapTextIntoTriangle(textElement, randomMessage);
    textElement.style.opacity = "1";
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  wrapTextIntoTriangle(
    document.getElementById("text"),
    "Ask your question, and then click   on me"
  );
});
