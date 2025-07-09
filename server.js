import express from 'express';
import path from 'path';
import session from 'express-session';
import { fileURLToPath } from 'url';
import router from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en puerto 3000");
});
