# Fetch airport data

> Fetch the [OpenFlights Airports Database].

[Openflights Airports Database]: https://github.com/jpatokal/openflights

## Usage

```js
const fetchAirportData = require('fetch-airport-data')

fetchAirportData()
  .then(airports => {
    // Your code here.
  })
```

`airports` is an array of airport objects, like:

```json
{
  "id": 146,
  "name": "Montreal / Pierre Elliott Trudeau International Airport",
  "city": "Montreal",
  "country": "Canada",
  "iata": "YUL",
  "icao": "CYUL",
  "latitude": 45.4706001282,
  "longitude": -73.7407989502,
  "altitude": 118,
  "timezone": -5,
  "dst": "A",
  "tz": "America/Toronto",
  "type": "airport",
  "source": "OurAirports"
}
```

## Static version

There's also an [airport-data](data) module containing a static version.

To update it, run `npm run update`, bump the version and publish.
