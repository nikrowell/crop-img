# crop-img

Creates a crop region with the given dimensions and alignment to be used with HTML canvas [`drawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage), similar to `background-size: cover` / `object-fit: cover`.

## Install

```bash
npm install crop-img
```

## Use

```js
import crop from 'crop-img';

const width = window.innerWidth;
const height = window.innerHeight;

const context = document.createElement('canvas').getContext('2d');
context.canvas.width = width;
context.canvas.height = height;
document.body.appendChild(context.canvas);

const img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'https://source.unsplash.com/random/1600x900';
img.onload = onload;

function onload() {
  // returns and object with x, y, width and height properties
  const rect = crop(img, { width, height, align: [0, 0]});
  context.drawImage(img, rect.x, rect.y, rect.width, rect.height);
}
```