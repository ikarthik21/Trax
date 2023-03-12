import cors-anywhere from 'cors-anywhere';


// Set the allowed origins for CORS
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Create a new instance of cors-anywhere
const server = corsAnywhere.createServer(corsOptions);

// Start the server
server.listen(8080, () => {
  console.log('CORS Anywhere server listening on port 8080');
});
