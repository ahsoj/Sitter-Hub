export function ISOConvert(isoDate: string) {
  const date = new Date(isoDate);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));

  if (minutes < 60) {
    return 'just now';
  } else if (minutes < 120) {
    return '1 min ago';
  } else if (minutes < 60 * 24) {
    const hours = Math.floor(minutes / 60);
    return `${hours} hours ago`;
  } else if (minutes < 60 * 24 * 30) {
    const days = Math.floor(minutes / (60 * 24));
    return `${days} days ago`;
  } else if (minutes < 60 * 24 * 365) {
    const months = Math.floor(minutes / (60 * 24 * 30));
    return `${months} months ago`;
  } else {
    const years = Math.floor(minutes / (60 * 24 * 365));
    return `${years} years ago`;
  }
}
