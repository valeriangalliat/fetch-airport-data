# Airport data

> JSON version of [OpenFlights Airports Database].

[Openflights Airports Database]: https://github.com/jpatokal/openflights

## Usage

```js
const airports = require('airport-data')
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
