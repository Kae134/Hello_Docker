# Utilisez une image officielle Node.js en tant qu'image de base
FROM node:14

# Créez un répertoire de travail dans l'image
WORKDIR /usr/src/app

# Copiez le fichier index.html dans le répertoire de travail
COPY index.html .
COPY m.mp3 .

# Exposez le port sur lequel le serveur HTTP de Node.js écoutera
EXPOSE 8080

# Installez le module http-server globalement
RUN npm install -g http-server

# Commande pour exécuter le serveur HTTP lorsque le conteneur démarre
CMD ["http-server", "--port", "8080"]

