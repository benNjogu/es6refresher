function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

document
  .getElementById("quote")
  .appendChild(
    elt(
      "footer",
      "-",
      elt("strong", "Karl Popper"),
      ", preface to the second edition of ",
      elt("em", "The Open Socitety and Its Enemies"),
      ", 1950"
    )
  );
/**
    No book can ever be finished. While working on it we learn just enough to find it immature the moment we turn away from it.
    -Karl Popper, preface to the second edition of The Open Socitety and Its Enemies, 1950
   */
