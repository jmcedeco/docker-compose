CREATE DATABASE app;
CREATE TABLE app.usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,                  -- Identificador único
    nombre_usuario VARCHAR(100) NOT NULL,               -- Nombre del usuario
    email VARCHAR(150) NOT NULL UNIQUE,                 -- Correo electrónico único
    clave_acceso VARCHAR(255) NOT NULL,                 -- Password
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Fecha de registro
);

INSERT INTO app.usuarios (nombre_usuario, email, clave_acceso)
VALUES ('juanma', 'juanma@ejemplo.com', '1234');

INSERT INTO app.usuarios (nombre_usuario, email, clave_acceso)
VALUES ('rocio', 'rocio@ejemplo.com', '1234');