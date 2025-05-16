export default function formatRelativeTime(dateInput: string | Date): string {
  const now = new Date();
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHr / 24);

  const pad = (n: number): string => n.toString().padStart(2, "0");

  if (diffMs < 0) {
    return "in the future";
  }

  if (diffMin < 60 && now.toDateString() === date.toDateString()) {
    if (diffMin < 1) return "just now";
    if (diffMin === 1) return "1 minute ago";
    return `${diffMin} minutes ago`;
  }

  if (now.toDateString() === date.toDateString()) {
    return `today at ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (yesterday.toDateString() === date.toDateString()) {
    return `yesterday at ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  if (diffDays < 7) {
    return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  }

  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} at ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
