const http = require('http');
const https = require('https');
const cheerio = require('cheerio');
const followRedirects = require('follow-redirects').http;

const url = 'http://www.wtc.wat.edu.pl/Plany/WTC20NI1S1.htm';

followRedirects.get(url, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    const $ = cheerio.load(html);
    const title = $('title').text();

    const server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <html>
          <head>
            <title>${title}</title>
          </head>
          <body>
            <h1>${title}</h1>
            <p>This is a simple web page created using Node.js</p>
          </body>
        </html>
      `);
      res.end();
    });

    server.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});