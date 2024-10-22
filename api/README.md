# servicios-bancarios

api/
|── src/
│   ├── config/          # Configuración de la base de datos y variables de entorno
│   ├── controllers/     # Manejo de las solicitudes HTTP (peticiones de la API)
│   ├── models/          # Definición de los esquemas/tablas (ORM)
│   ├── repositories/    # Capa de acceso a datos (queries a la base de datos)
│   ├── services/        # Lógica de negocio, cálculos, validaciones
│   ├── routes/          # Definición de las rutas/endpoints
│   ├── utils/           # Funciones auxiliares, middleware
│   ├── app.js           # Configuración de Express, middlewares globales
│   └── server.js        # Punto de entrada del servidor
└── package.json         # Dependencias del proyecto


5. Agregar Captcha
Puedes usar Google reCAPTCHA en el frontend, y luego validar el token en el backend con una petición a la API de reCAPTCHA.

Valida el token en el backend:

javascript
Copy code
const axios = require('axios');

exports.validateCaptcha = async (req, res, next) => {
    const { token } = req.body;

    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`);
        if (response.data.success) {
            next();
        } else {
            res.status(400).json({ message: 'Captcha inválido' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al validar el captcha' });
    }
};
Próximos pasos:
Implementar el CRUD de usuarios y ventas.
Integrar autenticación con JWT y permisos basados en roles.
Validar el captcha en el backend.
Añadir validaciones adicionales, como la sumatoria de ventas y restricciones de visualización por rol.