const request = new XMLHttpRequest();

request.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.wtc.wat.edu.pl/Plany/WTC20NI1S1.htm', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Pobieramy HTML ze strony
    const html = request.responseText;
    // Tworzymy element div i ustawiamy mu HTML pobrany ze strony
    const div = document.createElement('div');
    div.innerHTML = html;
    // Szukamy tabelki na stronie
    const table = div.querySelector('table');
    // Jeśli tabelka została znaleziona
    if (table) {
      // Zamieniamy ją na div'y
      const newDiv = document.createElement('div');
      newDiv.innerHTML = table.innerHTML;
      // Wstawiamy div'y zamiast tabelki
      table.parentNode.replaceChild(newDiv, table);
    }
  } else {
    console.error('Wystąpił błąd podczas pobierania strony');
  }
};

request.onerror = function() {
  console.error('Wystąpił błąd podczas pobierania strony');
};

request.send();
