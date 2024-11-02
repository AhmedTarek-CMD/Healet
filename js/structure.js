let bar = document.getElementById("burger");

bar.addEventListener("click", () => {
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  let menu = document.createElement("div");
  menu.className = "menu";
  document.body.appendChild(menu);
  let list = document.createElement("ul");
  list.className = "menu-list";
  menu.appendChild(list);
  const items = ["Home", "About", "Shop", "Blog"];
  items.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  let exit = document.createElement("p");
  exit.className = "exit";
  let content = document.createTextNode("X");
  exit.appendChild(content);
  overlay.appendChild(exit);
  exit.addEventListener("click", () => {
    overlay.remove();
    menu.remove();
  });
});
