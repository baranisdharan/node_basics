import { createServer } from 'http';

// Set your name here
const yourName = 'Barani Dharan';

// Create the server
const server = createServer((req, res) => {
  // Log your name
  console.log(yourName);

  // Set the response content type
  res.setHeader('Content-Type', 'text/plain');

  // Send your name as the response
  res.end(yourName);
});

// Start the server on port 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
