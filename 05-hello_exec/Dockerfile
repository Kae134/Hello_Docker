# Utilisez l'image officielle de PostgreSQL
FROM postgres:latest

WORKDIR /app

# Définissez des variables d'environnement pour la base de données
ENV POSTGRES_DB=bdd
ENV POSTGRES_USER=b
ENV POSTGRES_PASSWORD=mdp

# Copiez le fichier SQL d'initialisation dans le conteneur
COPY db.sql /docker-entrypoint-initdb.d/

# Exposez le port par défaut de PostgreSQL
EXPOSE 5432