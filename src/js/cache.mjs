export function getLocalStorage(key = '') {
  let value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  else return false;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function checkLocalStorage(key) {
  let value = localStorage.getItem(key);
  return value ? true : false;
}

export function isExpired(data) {
  let currMilliseconds = new Date().getTime();
  let limit = 3 * 3600000; // 3 hours * 3600000 milliseconds per hour
  let dataDate = new Date(data.date);
  if (currMilliseconds - dataDate.getTime() >= limit) return true;
  else return false;
}
