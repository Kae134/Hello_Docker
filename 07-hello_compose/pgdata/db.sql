
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL
);

INSERT INTO tasks (description) VALUES ('Prendre une pause café');
INSERT INTO tasks (description) VALUES ('Chercher des blagues sur SQL');
INSERT INTO tasks (description) VALUES ('Se rappeler de sauvegarder le travail');


