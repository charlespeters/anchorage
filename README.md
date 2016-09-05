# Anchorage

<a href="https://github.com/charlespeters/VVWIP">
  <img align="right" src="https://unpkg.com/vvwip/VVWIP.svg" alt="VVWIP" />
</a>

Automatically set the links and IDs of headlines inside an element so you can have internal page links to reference and share. This is a lightweight alternative of [Anchor.js](https://github.com/bryanbraun/anchorjs) using ES6 classes.

## Install

```shell
npm i -S anchorage
```

## Usage

It takes at least one parameter of the selector you're wanting to apply Anchorage to:

```js
new Anchorage('.Post') // could be an ID, a class or an element
```

If you want to apply Anchorage to only certain headline elements or apply a class to the new link being created you can pass in an object like this:

```js
new Anchorage('.Post', {
  linkClass: 'link',
  headlines: 'h1, h3, h6'
})
```

### Development

1. Clone the repository
2. Run `npm install; npm run bundle`

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
