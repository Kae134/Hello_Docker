#!/bin/bash

# Création du fichier index.html
cat <<EOT > index.html
<!DOCTYPE html>
<html>
<head>
    <title>Test de compétences</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }
        h1 {
            color: #444;
        }
        .important {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Test de compétences</h1>
    <p>À ce stade, soit vous avez utilisé votre intelligence, soit vous avez fait appel à ChatGPT. Sachez que vous serez testé, et pendant les exercices, j'ai placé de petits pièges, disons des "red flags". Je connais les générations typiques de ChatGPT et je sais pourquoi il produit ces résultats. Cependant, pour vous, si vous ne faites pas attention, vous risquez de me fournir un Dockerfile que vous ne maîtrisez pas. Soyez prudent, ChatGPT sans votre précieux cerveau pourrait vous être fatal... Vous voilà averti.</p>
    <img src="https://i.gifer.com/ERqp.gif" alt="GIF humoristique">
</body>
</html>
EOT

echo "index.html créé avec succès."
