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
