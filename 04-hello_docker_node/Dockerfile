# Utilisez une image officielle Node.js en tant qu'image de base
FROM node:14

# Créez un répertoire de travail dans l'image
WORKDIR /usr/src/app

COPY package*.json ./

# Installez les modules
RUN npm install

RUN npm install -g http-server

# Copiez le fichier index.html dans le répertoire de travail
COPY . .

# Exposez le port sur lequel le serveur HTTP de Node.js écoutera
EXPOSE 3000

# Commande pour exécuter le serveur HTTP lorsque le conteneur démarre
CMD ["node", "server.js"]
