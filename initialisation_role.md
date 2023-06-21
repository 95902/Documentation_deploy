




# Initialisation d'un rôle Ansible

Voici une procédure détaillée pour l'initialisation d'un rôle Ansible avec les différentes tâches, templates et fichiers requis :

1. Ouvrez un terminal ou une invite de commandes.

2. Utilisez la commande suivante pour initialiser un nouveau rôle Ansible en spécifiant le nom du rôle et le chemin où vous souhaitez créer le rôle :

    Remplacez "nom_du_role" par le nom que vous souhaitez donner à votre rôle. Par exemple, si vous souhaitez créer un rôle appelé "mon_role", la commande serait :

    ```
    ansible-galaxy init mon_role
    ```

3. Après l'exécution de la commande, un nouveau répertoire portant le nom du rôle sera créé dans le répertoire actuel. Ce répertoire contiendra la structure de base du rôle Ansible, y compris les répertoires suivants :

    ::: details Structure de dossier :

    - **defaults/** : Ce répertoire contient les variables par défaut pour le rôle.
    - **files/** : Ce répertoire est utilisé pour stocker les fichiers à copier sur les machines cibles.
    - **handlers/** : Ce répertoire contient les gestionnaires (handlers) utilisés par les tâches.
    - **meta/** : Ce répertoire est utilisé pour stocker les métadonnées du rôle.
    - **tasks/** : Ce répertoire contient les tâches principales du rôle.
    - **templates/** : Ce répertoire est utilisé pour stocker les templates à utiliser par le rôle.
    - **tests/** : Ce répertoire est utilisé pour stocker les fichiers de tests pour le rôle.
    - **vars/** : Ce répertoire contient les fichiers de variables spécifiques au rôle.

    :::

4. Pour la création des fichiers et tâches spécifiques, suivez les étapes ci-dessous :

    a. Tâche "after symlink" (après la création des liens symboliques) : Créez un fichier YAML dans le répertoire `tasks` avec le nom `after_symlink.yml`. Cette tâche peut contenir les actions à effectuer après la création des liens symboliques.

   ```  yaml
        ---
        - name: Exécuter des actions après la création des liens symboliques
        # Ajoutez ici les actions spécifiques
    ```

    b. Tâche "before symlink" (avant la création des liens symboliques) : Créez un fichier YAML dans le répertoire `tasks` avec le nom `before_symlink.yml`. Cette tâche peut contenir les actions à effectuer avant la création des liens symboliques.

    ```  yaml
        ---
        - name: Exécuter des actions avant la création des liens symboliques
        # Ajoutez ici les actions spécifiques
    ```

    c. Tâche "main" (tâches principales) : Créez un fichier YAML dans le répertoire `tasks` avec le nom `main.yml`. Cette tâche contient les actions principales du rôle.

    
    ```  yaml
        ---
        # tasks file for Lagon_ansistrano

        - name: correct unsafe git repo error
        shell: "git config --global --add safe.directory {{ ************}}/repo"

        - name: 
        include_role:
            name: ansistrano.deploy
            # name: ansistrano.rollback
    ```

    d. Templates : Créez les templates requis dans le répertoire `templates`. Pour les fichiers `docker-compose.yml`, `Dockerfile` et `Vhost`, créez les fichiers suivants :

        - `docker-compose.yml.j2`
        - `Dockerfile.j2`
        - `Vhost.j2`

    e. Fichier "db_vars" : Créez un fichier YAML dans le répertoire `vars` avec le nom `db_vars.yml`. Ce fichier peut contenir les variables spécifiques à la base de données.


    ```  yaml
        ---
        db_host: localhost
        db_user: myuser
        db_password: mypassword
        db_name: mydatabase
    ```

    f. Fichier "main" : Le fichier `main.yml` dans le répertoire `vars` contient les variable nécéssaire aux  déploiement du projet .


    ```  yaml
        ---
        # vars file for Assurmix_inte
        dest: "{{ ****** }}/"
        ansistrano_deploy_via: "git"
        ansistrano_git_branch: main
        ansistrano_git_repo: https://{{ *********** }}@github.com/*******/*********.git
        ansistrano_deploy_to: "{{ dest }}"
        ansistrano_before_symlink_shared_tasks_file: tasks/before_symlink.yml
        ansistrano_after_symlink_tasks_file: tasks/after_symlink.yml
        ansistrano_keep_releases: 3

5. Une fois que vous avez personnalisé les fichiers, les tâches et les templates selon vos besoins spécifiques, vous pouvez les utiliser dans vos playbooks Ansible.

Assurez-vous d'adapter les noms des fichiers, des tâches et des variables en fonction de votre structure et de vos besoins réels.

