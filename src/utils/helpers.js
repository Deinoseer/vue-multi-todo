export function getMaxId(data) {
  if (!data.length) return 0;
  if (data.length === 1) return 1;
  return data.reduce((a, b) => (a.id > b.id ? a.id : b.id));
}
