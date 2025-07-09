import { pool } from '../models/db.js';

// Mostrar formulario de login
export const showLogin = (req, res) => {
  res.render('login', { titulo: 'Login', body: '' });
};

// Procesar login
export const login = async (req, res) => {
  const { nombre, password } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM app.usuarios WHERE nombre_usuario = ? AND clave_acceso = ?',
      [nombre, password]
    );

    if (rows.length > 0) {
      req.session.user = {
        id: rows[0].id,
        nombre_usuario: rows[0].nombre_usuario,
        email: rows[0].email
      };
      console.log("✅ Login correcto:", rows[0].nombre_usuario);
      res.redirect('/');
    } else {
      console.warn("❌ Login fallido");
      res.redirect('/login?error=1');
    }
  } catch (err) {
    console.error('❌ Error al consultar la base de datos:', err);
    res.status(500).send('Error del servidor');
  }
};

// Cerrar sesión
export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('❌ Error al cerrar sesión:', err);
      return res.status(500).send('Error al cerrar sesión');
    }
    res.redirect('/login');
  });
};

// Middleware de autenticación
export const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};
