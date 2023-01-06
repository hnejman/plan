fetch('https://www.wtc.wat.edu.pl/Plany/WTC20NI1S1.htm')
  .then((response) => response.json())
  .then((data) => console.log(data));
