const generateHTML = (data) => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyTeam</title>
        <link rel="stylesheet" href="./utils/style.css">
    </head>
    <body>
        <h1 id="header">My Team</h1>
        <p>${data}</p>
    </body>
    </html>
    `
}

module.exports = generateHTML;