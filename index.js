
const convertToCelsius = (temp) => {
  return Math.round((temp - 32) * (5/9));
}

const describeTemperature = (temp) => {
  if (temp < 32){
    return `very cold`;
  } 
  else if (temp < 64) {
    return `cold`;
  }
  else if ( temp < 86) {
    return `warm`;
  }
  else if ( temp < 100) {
    return `hot`;
  }
  else if ( temp >= 100) {
    return `very hot`;
  }
  
}

fTemp = Number(prompt(`Give me Fahrenheit and I'll give you Celsius: `));
cTemp = convertToCelsius(fTemp)
tempDescrip = describeTemperature(fTemp);

alert(`${fTemp} degrees Fahrenheit is ${tempDescrip}.  
${fTemp} is ${cTemp} degrees Celsius.`);

