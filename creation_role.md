# Initialisation d'un rôle Ansible avec ansible-galaxy

1. Ouvrez un terminal ou une invite de commandes dans le répertoire playbooks.

2. Utilisez la commande suivante pour initialiser un nouveau rôle Ansible en spécifiant le nom du rôle et le chemin où vous souhaitez créer le rôle :

    ```
        ansible-galaxy init nom_du_projet
    ```

3. Une fois la commande exécutée, un nouveau répertoire portant le nom du rôle sera créé dans le répertoire actuel. 
    Ce répertoire contiendra la structure de base du rôle Ansible, y compris les répertoires defaults, files, handlers, meta, tasks, templates, tests et vars, ainsi qu'un fichier README.md.

4. installer les rôles "ansistrano.deploy" et "ansistrano.rollback", Utilisez la commande suivante  :

    ```
    ansible-galaxy install ansistrano.deploy ansistrano.rollback
    ````
    Cette commande téléchargera les rôles depuis la galerie Ansible Galaxy et les installera dans le répertoire de votre projet.

::: details  Explications de la structure de dossier :

- **defaults/** : Ce répertoire contient le fichier `main.yml` qui définit les variables par défaut pour le rôle.

- **files/** : Ce répertoire contient les fichiers statiques nécessaires au rôle. Par exemple, `config.ini` et un sous-répertoire `scripts/` contenant des scripts exécutables.

- **handlers/** : Ce répertoire contient le fichier `main.yml` qui définit les gestionnaires (handlers) utilisés dans le rôle.

- **meta/** : Ce répertoire contient le fichier `main.yml` qui fournit des métadonnées sur le rôle, telles que les dépendances avec d'autres rôles.

- **tasks/** : Ce répertoire contient le fichier `main.yml` qui contient les tâches à exécuter pour le rôle.

- **templates/** : Ce répertoire contient les modèles de fichiers utilisés dans le rôle. Par exemple, `template.conf.j2` est un fichier de modèle utilisant la syntaxe Jinja2.

- **tests/** : Ce répertoire contient les fichiers de test pour le rôle. Il peut inclure un répertoire `inventory/` contenant des fichiers d'inventaire de test, un fichier `requirements.yml` spécifiant les dépendances de test, et un fichier `test.yml` décrivant les scénarios de test.

- **vars/** : Ce répertoire contient les fichiers `main.yml` et `secrets.yml` qui définissent les variables utilisées dans le rôle. Le fichier `secrets.yml` peut contenir des variables sensibles qui doivent être protégées.

- **README.md** : Ce fichier contient la documentation du rôle, décrivant son objectif, son utilisation et d'autres informations pertinentes.

Veuillez noter que cette structure de dossier est une suggestion courante pour un rôle Ansible, mais elle peut être adaptée en fonction des besoins spécifiques du projet.

:::