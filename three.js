const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Server-Side Example</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    text-align: center;
                    margin: 20px;
                }

                #output {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>

        <button onclick="fetchFile()">Fetch Text File</button>
        <div id="output"></div>

        <script>
            function fetchFile() {
                fetch('/readFile')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(\`HTTP error! Status: \${response.status}\`);
                        }
                        return response.text();
                    })
                    .then(content => {
                        const outputDiv = document.getElementById('output');
                        outputDiv.textContent = content;
                        // Process the file content as needed
                    })
                    .catch(error => console.error('Error:', error));
            }
        </script>

        </body>
        </html>
    `);
});

app.get('/readFile', (req, res) => {
    const filePath = path.join(__dirname, 'example.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(\`Server listening on http://localhost:\${port}\`);
});
