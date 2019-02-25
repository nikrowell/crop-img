
export default function crop(img, {
  width,
  height = width,
  align = 0.5,
  scale = 1 // TODO: implement scale
} = {}) {

  Array.isArray(align) || (align = [align, align]);
  Array.isArray(scale) || (scale = [scale, scale]);

  const ratio = img.width / img.height;
  const rect = { x: 0, y: 0, width, height };

  if (ratio > (width / height)) {
    rect.width = img.width * (height / img.height);
    rect.x = (width - rect.width) * align[0];
  } else {
    rect.height = img.height * (width / img.width);
    rect.y = (height - rect.height) * align[1];
  }

  return rect;
};