export function useStore() {
  const pickUp = localStorage.getItem('pickUp')
    const destination = localStorage.getItem('pickUp')
    return{pickUp,destination}
}