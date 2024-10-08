# Prova Backend Hackató Saló Ocupació

1. Instalamos las dependencias del proyecto

```sh
npm install
```

2. Configuración

```sh
añadir un connectionString como "DB_URI=" en el .env
```

3. Levantar el server y conectar a la base de datos

```sh
npm run start
```

El proyecto está montado con una architectura MVC

```
src/
├──api/
│ ├── controllers/
│ │ ├── activity/
│ │ │  ├── createActivity.ts
│ │ │  ├── exportActivity.ts
│ │ │  ├── fetchActivity.ts
│ │ │  ├── fetchAllActivity.ts
│ │ │  ├── importActivity.ts
│ │ │  └── singUpActivity.ts
│ │ └── user/
│ │    ├── createUser.ts
│ │    ├── deleteUser.ts
│ │    ├── fetchAllUsers.ts
│ │    ├── fetchUser.ts
│ │    └── updateUser.ts
│ │
│ ├── middleware/
│ │ └── getRootPath.ts
│ │
│ └── routes/
│   ├── activityRoutes.ts
│   └── userRoutes.ts
│  
├── database/
│   ├── models/
│   │ ├── activityModel.ts
│   │ └── userModel.ts
│   ├── schemas/
│   │ ├── activitySchema.ts
│   │ └── userSchema.ts
│   └── connection.ts
│ 
└── index.ts

```