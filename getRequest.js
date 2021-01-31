import { get } from 'http';

get('http://localhost:3004/example.txt', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log('response data', data);
  });
}).on('error', (err) => {
  console.log('error', err);
});
