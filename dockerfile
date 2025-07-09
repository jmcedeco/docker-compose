# Imagen base oficial de NodeJS
FROM node:latest

# Carpeta de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencia del package.json
COPY package.json ./

# Instala las dependencias con npm
RUN npm install

# Copiar el resto de archivos
COPY . .

# Exponer el puerto de la app
EXPOSE 3000

# Comando que arranca mi app
CMD ["npm", "run", "dev"]

