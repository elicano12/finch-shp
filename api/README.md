# servicios-bancarios

api/
|── src/
│   ├── config/          # Configuración de la base de datos y variables de entorno
│   ├── controllers/     # Manejo de las solicitudes HTTP (peticiones de la API)
│   ├── middleware  /    # Manejo de validaciones a nivel de Middleware
│   ├── models/          # Definición de los esquemas/tablas (ORM)
│   ├── repositories/    # Capa de acceso a datos (queries a la base de datos)
│   ├── services/        # Lógica de negocio, cálculos, validaciones
│   ├── routes/          # Definición de las rutas/endpoints
│   ├── utils/           # Funciones auxiliares, middleware
│   ├── app.js           # Configuración de Express, middlewares globales
│   └── server.js        # Punto de entrada del servidor
└── package.json         # Dependencias del proyecto



## How it works?

Requirements are:

- PostgreSQL
- Node.js 20+
- Docker (optional)

If you don't have a PostgreSQL instance, you can use the image created with Docker. Once you have Docker installed and running, run the following command:

`docker-compose up -d`

Then, from the client software of your preferred (I use Bveaver), you can connect to the database and create the table from your preferred database administrator, and insert the rows. In the scripts folder, I left the necessary scripts to be used in this challenge.

To execute the API client you need the following steps.

1. Install the dependencies `npm i`
2. Add the .env file using the template in `.env.template`
3. Run the service: `npm start`