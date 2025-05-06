const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('HiveBox Running 🚀'));
app.listen(3000);
