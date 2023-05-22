import { createServer } from 'http';

const server = createServer((req, res) => {
  // Extract the URL path from the request
  const url = req.url;

  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Determine the response based on the URL
  if (url === '/home') {
    res.end('Welcome home');
  } else if (url === '/about') {
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    res.end('404 Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
