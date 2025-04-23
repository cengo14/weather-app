export const convertCoordinatesToPixels = (coordinates) => {
  const { lat, lon } = coordinates;
  const x = (lon + 180) * (256 / 360);
  const y = (256 / 2) - (256 * Math.log(Math.tan((Math.PI / 4) + (Math.PI / 180) * lat / 2)) / (2 * Math.PI));
  return { x, y };
};