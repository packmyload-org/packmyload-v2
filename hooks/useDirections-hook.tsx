export const calculateRoute = async () => {
  const pickUp = localStorage.getItem('pickUp');
  const destination = localStorage.getItem('destination');

  if (!pickUp || !destination) {
    return null;
  }
console.log('pickup',pickUp)
console.log('drop',destination)
  const directionService = new google.maps.DirectionsService();
  const results = await directionService.route({
    origin: pickUp,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
  });
  console.log('results', results)
  return {
    direction: results,
    distance: results.routes[0].legs[0].distance?.text,
    duration: results.routes[0].legs[0].duration?.text,
  };
};
