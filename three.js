const express = require('express');
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
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                }

                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    color: #007BFF;
                }

                p {
                    color: #333;
                }
            </style>
            <title>Node.js Server HTML and CSS</title>
        </head>
        <body>

        <div class="container">
            <h1>Hello from Node.js Server!</h1>
            <p>This is a simple HTML page served by a Node.js server.</p>
        </div>

        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

// sir I tried to make it, but I don't know where I got it wrong.
