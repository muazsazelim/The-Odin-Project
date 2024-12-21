const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.style.color = "red";

container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";

container.appendChild(blue);

const black = document.createElement("div");
black.style.borderStyle = "solid";
black.style.borderColor = "black";
black.style.backgroundColor = "pink";

const inDiv = document.createElement("h1");
inDiv.textContent = "I'm in a div!";

black.appendChild(inDiv);

const inDiv2 = document.createElement("p");
inDiv2.textContent = "ME TOO!";

black.appendChild(inDiv2);

container.appendChild(black);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });
  