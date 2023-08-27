export function useStore() {
  const pickUp = window.localStorage.getItem('pickUp');
  const destination = window.localStorage.getItem('destination');
  if (!(pickUp || destination)) {
    return null;
  }
  return { pickUp, destination };
}

export function clearStore() {
  window.localStorage.clear();
}