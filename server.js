const express = require('express');
const Routes = require('./src/pinjam/routes');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

// cors
app.use(
	cors({
		origin: true,
		credentials: true,
		preflightContinue: false,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	})
);
app.options('*', cors());

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/pinjam', Routes);

app.listen(port, () => console.log(`app listen on port ${port}`));
