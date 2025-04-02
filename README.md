# Express.js Project

This is a simple Express.js project setup.

## Installation

Follow these steps to set up the project:

1. Initialize a new Node.js project:
   ```sh
   npm init -y
   ```

2. Install Express:
   ```sh
   npm install express
   ```

3. Create a new project directory and navigate into it:
   ```sh
   mkdir project && cd project
   ```

4. Create the `app.js` file:
   ```sh
   touch app.js
   ```

## Usage

To start the Express application, add the following code to `app.js`:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Run the application:
```sh
node app.js
```

## License
This project is licensed under the MIT License.

