const Xray = require('x-ray')
let x = Xray()

x('https://www.periodicalpress.senate.gov/press-contacts/', 'tbody tr', [{
  office: '.column-1',
  contact: '.column-2',
  officePhone: '.column-3',
  cellPhone: '.column-4',
  email: '.column-5'

}])
  .write('senator-results.json')
  
