# Procédure d'intégration d'un dossier playbook dans un projet

1. Récupérer le dossier playbook fournie et glisser le dans le projet  .

    ::: details Structure du dossier
       playbook/
        ├── inventory/
        │   └── hosts
        ├── portenaire.io/
        │   ├── defaults/
        │   │   └── main.yml
        │   ├── files/
        │   ├── handlers/
        │   │   └── main.yml
        │   ├── meta/
        │   │   └── main.yml
        │   ├── tasks/
        │   │   └── main.yml
        │   ├── templates/
        │   ├── tests/
        │   │   ├── inventory
        │   │   └── test.yml
        │   ├── vars/
        │   │   ├── main.yml
        │   └── README.md
        └── deploy.yml

     :::

    ::: tip     [Plus d'information concernat la création d'un role](/instalation_VirtualBox).

    :::

2. Ouvrer le ficher hosts qui ce trouve dans inventory .

3. Modifier les informations des serveurs ce trouvant dans ce fichier.

    ``` js
        [marster]
        marster ansible_host=***.***.**.***

        [dev_serveur]
        dev_serveur ansible_host=***.***.**.***


        [all:vars]
        ansible_python_interpreter=/usr/bin/python3

    ````

