# base image
FROM nginx:latest

# Crear el directorio de la aplicación
WORKDIR /veterinaria-citas-web

# Copia tus archivos estáticos al directorio de NGINX
COPY . /usr/share/nginx/html/veterinaria-citas-web

# Expone el puerto 5051 para acceder al servicio
EXPOSE 5051