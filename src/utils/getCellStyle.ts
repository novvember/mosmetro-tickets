export default function getCellStyle(value: number, min: number, max: number) {
  const MIN_AREA = 0.01;
  const TRANSIT_AREA = Math.PI / 4;
  const MAX_AREA = 0.88;

  const ratio = (value - min) / (max - min);
  const area = ratio * (MAX_AREA - MIN_AREA) + MIN_AREA;

  if (area <= TRANSIT_AREA) {
    const x = 100 * Math.sqrt((4 * area) / Math.PI);
    return {
      borderRadius: '50%',
      width: `${x.toFixed(1)}%`,
    };
  } else {
    const x = 100 * Math.sqrt((1 - area) / (4 - Math.PI));
    return {
      borderRadius: `${x.toFixed(1)}%`,
      width: '100%',
    };
  }
}
