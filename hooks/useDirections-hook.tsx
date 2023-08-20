export function useStore() {
  const pickUp = localStorage.getItem('pickUp');
  const destination = localStorage.getItem('destination');
  return { pickUp, destination };
}
