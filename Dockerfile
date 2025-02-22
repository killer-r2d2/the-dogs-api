# Use Nginx as the base image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy all web files to nginx's serving directory
COPY index.html .
COPY main.js .

# Expose port 80 (default for HTTP)
EXPOSE 80

# Nginx starts automatically, so we don't need a CMD 