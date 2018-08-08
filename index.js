export default class Anchorage {
  constructor(baseSelector, options = {}) {
    // Defaults
    const dft = {
      linkClass: "Anchorage",
      headlines: "h1, h2, h3, h4, h5, h6"
    };

    this.options = Object.assign({}, dft, options);

    const headlines = this.headlines(baseSelector);

    for (let i = 0; i < headlines.length; i++) {
      const txt = this.parser(headlines[i]);
      const count = i + 1;
      const ref = `${txt}-${count}`;

      this.setter(headlines[i], ref);
      this.link(headlines[i], this.element(headlines[i].getAttribute("id")));
    }
  }

  // Collects All the Headlines
  headlines(x) {
    const headlines = document.querySelector(x);

    return headlines.querySelectorAll(this.options.headlines);
  }

  // Creates the ID/reference
  parser(x) {
    let s = x.innerHTML;
    return s.toLowerCase().replace(" ", "-");
  }

  // Sets ID attribute
  setter(x, y) {
    if (!x.hasAttribute("id")) {
      x.setAttribute("id", y);
    }
  }

  // Creates Link Element
  element(y) {
    const ref = `#${y}`;
    const elm = document.createElement("a");
    const t = document.createTextNode("Link");

    elm.appendChild(t);
    elm.setAttribute("href", ref);
    elm.setAttribute("class", this.options.linkClass);

    return elm;
  }

  // Appends Link Element
  link(x, y) {
    return x.appendChild(y);
  }
}
