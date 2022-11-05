const  { createClient } = require( 'redis');

const client = createClient();

client.on('connect', function() {
 console.log('Connected!');
});


 client.connect().then(r => r)

 client.ping().then(r => console.log(r));

client.set('framework', 'ReactJS').then(r => console.log('write ok'));
const tmp = client.set('123','123');

console.log(await client.get('framework'))