# Procédure d'installation pour l'extension Remote - SSH dans Visual Studio Code

1. Ouvrez Visual Studio Code sur votre machine.

2. Cliquez sur l'icône des extensions dans la barre latérale de gauche ou utilisez le raccourci clavier Ctrl+Shift+X (Windows/Linux) pour accéder à la vue des extensions.

3. Dans la barre de recherche des extensions, tapez "Remote - SSH" et appuyez sur Entrée. Vous verrez une liste d'extensions correspondantes.

4. Localisez l'extension "Remote - SSH" dans la liste et cliquez sur le bouton "Installer" à côté de celle-ci.
   
   ![An image](images\remotessh1.PNG)

5. Une fois l'installation terminée, vous pouvez cliquer sur le bouton "Redémarrer" pour activer l'extension ou choisir de redémarrer ultérieurement.

6. Une fois que Visual Studio Code a redémarré, vous pouvez commencer à utiliser l'extension Remote - SSH.

7. Pour se connecter à un hôte distant via SSH, cliquez sur l'extension explorateur distant et sélectionnez nouveau distant.
![An image](images\remotessh2.jpg)

8. Taper dans l'onglet les informations de votre machine master comme ce-ci : 
    ```js
        ssh deploy@111.222.33.44
    ```


9. Sélectionner le fichier de configuration SSH à mettre à jour .

    ::: details 
      ![An image](images\remotessh3.jpg)
    :::
  

10. Taper les détails de connexion
    ```js
        Host *********
            HostName ***.***.***.***
            User deploy
            IdentityFile "C:\*****\*\**"
    ```

::: details 11. Actualiser l'explorateur distant
![An image](images\remotessh5.jpg)
:::

::: details 12. Cliquer sur le bouton ce connecter dans un nouvelle onglet 

![An image](images\remotessh6.jpg)
:::

::: details 13. Sélectioner la plateforme linux pour le remote

![An image](images\remotessh7.jpg)
:::

::: details 14. Entrer la phrase secrète pour vous connecter

![An image](images\remotessh8.png)
:::

::: details 14. Ouvrer l'explorateur de fichier, puis le dossier et seclectioner l'empacement de la racine du projet.

![An image](images\remotessh9.jpg)
:::

    
::: details 15. Sélectioner la plateforme linux pour le remote, Ouvrer l'explorateur de fichier  et vous devriez avoir un résultat comme l'image ci-dessous

![An image](images\remotessh10.png)
:::

L'intallation du remote ssh pour la master est terminer 

N'hésitez pas à consulter la documentation officielle de l'extension Remote - SSH pour plus d'informations et de détails sur son utilisation :

- [Documentation Remote - SSH de Visual Studio Code](https://code.visualstudio.com/docs/remote/ssh)
- [Vidéo de présentation de l'extension Remote SSH sur la chaîne YouTube officielle de Visual Studio Code](https://www.youtube.com/watch?v=rh1Ag41J6IA)

Cette documentation fournit des instructions détaillées ainsi que des captures d'écran pour vous aider à comprendre et à utiliser pleinement l'extension Remote - SSH dans Visual Studio Code.