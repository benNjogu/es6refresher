function replaceImages() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
} //-> The Cat in the Hat.

/**
 * Given a string, createTextNode, gives us a text node that we can insert into the document to make
 * it show up on the screen.
 */
