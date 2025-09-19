# Readings Monitor API

API RESTful para la gestión de lecturas de libros, usuarios y autenticación, desarrollada con Node.js, Express y MongoDB.

## Tabla de Contenidos

- [Motivacion](#motivación)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)

---

## Motivación

El objetivo principal de este proyecto es aprender y comprender en profundidad cómo montar una API RESTful con un sistema de autenticación basado en JWT, evitando el uso de librerías que abstraigan demasiado el proceso. De este modo, se busca entender bien el flujo completo de autenticación, manejo de usuarios y protección de rutas, así como las mejores prácticas en la estructuración y validación de una API moderna.

## Características

- Registro y login de usuarios con JWT.
- Hashing seguro de contraseñas usando Argon2.
- CRUD de lecturas asociadas a cada usuario autenticado.
- Validación de datos con Zod.
- Manejo centralizado de errores.
- Logging estructurado con Pino.
- Conexión a MongoDB usando Mongoose.
- Separación clara de responsabilidades por carpetas.

## Requisitos

- Node.js >= 18
- Docker (opcional, para levantar MongoDB con Docker Compose)
- MongoDB (local o en contenedor)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <repo-url>
   cd readings-api
   ```
2. Instala las dependencias:
   ```sh
    npm install
   ```

## Configuración

1. Copia el archivo de entorno de ejemplo y edítalo:

   ```sh
   cp .env.example .env
   ```

2. Configura las variables de entorno en el archivo `.env`:
   ```env
    NODE_ENV=development
    PORT=3000
    DATABASE_URL=mongodb://root:example@localhost:27017/readings-api
    DB_NAME=readings-api
    JWT_SECRET=secure-secret
    JWT_EXPIRE_TIME=15min
   ```

## Ejecución

Levantar MongoDB con Docker Compose

```sh
docker compose up -d
```

Iniciar la API
Modo desarrollo (con recarga automática):

```sh
npm run dev
```

Modo producción:

```sh
npm start
```

La API estará disponible en http://localhost:3000.
