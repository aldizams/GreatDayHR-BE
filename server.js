const express = require('express');
const Routes = require('./src/pinjam/routes');

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/pinjam', Routes);

app.listen(port, () => console.log(`app listen on port ${port}`));
