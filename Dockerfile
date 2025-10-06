# Etapa 1: Build de la app Angular
FROM node:18 AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos necesarios (excluyendo node_modules)
COPY package*.json ./
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el build de Angular (producción)
RUN npm run build

# Etapa 2: Imagen final con nginx
FROM nginx:alpine

# Copiamos el build a la carpeta pública de nginx
COPY --from=build /app/dist/noche-dorada/browser /usr/share/nginx/html

# Copiamos un archivo de configuración básico de nginx si lo deseas
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
