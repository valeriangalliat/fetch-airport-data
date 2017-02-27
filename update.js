const fetchAirportData = require('./')

fetchAirportData()
  .then(airports => JSON.stringify(airports, null, 2))
  .then(console.log)
