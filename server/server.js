import express from 'express';

import cors from 'cors';

import {getMenuList, getMenuByIdentifier, getMenuByLimit } from './routes/routes.js';

const app = express();

app.use(cors());

app.get('/menulist', getMenuList);
app.get('/menu/:identifier', getMenuByIdentifier);
app.get('/menubylimit', getMenuByLimit);

app.listen(4001, () => {
  console.log('Server listening at 4001');
});
