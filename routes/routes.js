import express from 'express';
import {
  showLogin,
  login,
  logout,
  requireLogin
} from '../controllers/LoginController.js';

const router = express.Router();

// Rutas públicas
router.get('/login', showLogin);
router.post('/login', login);
router.get('/logout', logout);

// Rutas protegidas
router.get('/', requireLogin, (req, res) => {
  res.render('layout', {
    usuario: req.session.user,
    titulo: 'Inicio',
    body: 'Bienvenido a JUANMA CO.'
  });
});

router.get('/contactar', requireLogin, (req, res) => {
  res.render('layout', {
    usuario: req.session.user,
    titulo: 'Contacto',
    body: 'Sección de contacto'
  });
});

router.get('/servicios', requireLogin, (req, res) => {
  res.render('layout', {
    usuario: req.session.user,
    titulo: 'Servicios',
    body: 'Servicios que ofertamos'
  });
});

router.get('/about', requireLogin, (req, res) => {
  res.render('layout', {
    usuario: req.session.user,
    titulo: 'Acerca de',
    body: 'Acerca de JUANMA CO.'
  });
});

export default router;
