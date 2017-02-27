const csvParse = require('csv-parse')
const request = require('request')

const defaultUrl = 'https://github.com/jpatokal/openflights/raw/master/data/airports.dat'
const url = process.argv[2] || defaultUrl

const columns = ['id', 'name', 'city', 'country', 'iata', 'icao', 'latitude', 'longitude', 'altitude', 'timezone', 'dst', 'tz', 'type', 'source']
const numberColumns = ['id', 'latitude', 'longitude', 'altitude', 'timezone']

const parseNull = cell => cell === '\\N' ? null : cell

module.exports = (url = defaultUrl) =>
  new Promise((resolve, reject) => {
    const rows = []

    request(url)
      .pipe(csvParse({ columns, escape: '\\' }))
      .on('data', row => {
        columns.forEach(name => row[name] = parseNull(row[name]))
        numberColumns.forEach(name => row[name] = Number(row[name]))
        rows.push(row)
      })
      .on('end', () => resolve(rows))
      .on('error', reject)
  })
