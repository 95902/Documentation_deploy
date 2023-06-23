import{_ as e,o as t,c as s,O as i}from"./chunks/framework.1bc11817.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/presentation.md","filePath":"docs/presentation.md"}'),a={name:"docs/presentation.md"},o=i('<h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Le déploiement d&#39;applications est un processus essentiel pour rendre une application accessible aux utilisateurs finaux. Cependant, ce processus peut parfois être complexe et coûteux, nécessitant des ressources importantes sur le serveur. Le but de ce projet est de simplifier le déploiement des applications tout en réduisant les coûts associés au serveur.</p><div class="tip custom-block"><p class="custom-block-title"><a href="/instalation_VirtualBox.html">Allez directement à l&#39;installation</a>.</p></div><h2 id="presentation-du-projet" tabindex="-1">Présentation du Projet <a class="header-anchor" href="#presentation-du-projet" aria-label="Permalink to &quot;Présentation du Projet&quot;">​</a></h2><h3 id="objectif-du-projet" tabindex="-1">Objectif du Projet <a class="header-anchor" href="#objectif-du-projet" aria-label="Permalink to &quot;Objectif du Projet&quot;">​</a></h3><p>L&#39;objectif principal de ce projet est de développer une solution qui facilite le déploiement des applications. Cette solution devrait permettre aux développeurs de déployer rapidement et facilement leurs applications sur le serveur, en automatisant certaines tâches et en réduisant les exigences en matière de ressources matérielles.</p><h3 id="avantages-attendus" tabindex="-1">Avantages Attendus <a class="header-anchor" href="#avantages-attendus" aria-label="Permalink to &quot;Avantages Attendus&quot;">​</a></h3><ul><li>Réduction des coûts : En simplifiant le processus de déploiement, nous pourrons réduire les ressources matérielles nécessaires sur le serveur, ce qui entraînera des économies significatives.</li><li>Gain de temps : La solution automatisée permettra aux développeurs de déployer rapidement leurs applications, ce qui accélérera la mise sur le marché et améliorera l&#39;efficacité du développement.</li><li>Facilité d&#39;utilisation : Nous visons à fournir une interface conviviale et intuitive pour que les développeurs puissent déployer leurs applications sans complications.</li></ul><h2 id="technologies-utilisees" tabindex="-1">Technologies Utilisées <a class="header-anchor" href="#technologies-utilisees" aria-label="Permalink to &quot;Technologies Utilisées&quot;">​</a></h2><h3 id="virtualbox" tabindex="-1">VirtualBox <a class="header-anchor" href="#virtualbox" aria-label="Permalink to &quot;VirtualBox&quot;">​</a></h3><p>VirtualBox est une solution de virtualisation open source qui permet de créer et de gérer des machines virtuelles. Dans le cadre de ce projet, nous utiliserons VirtualBox pour créer une infrastructure virtuelle sur laquelle nous déploierons nos applications. Cette technologie offre une grande flexibilité et facilite la gestion des ressources matérielles.</p><h3 id="ansible" tabindex="-1">Ansible <a class="header-anchor" href="#ansible" aria-label="Permalink to &quot;Ansible&quot;">​</a></h3><p>Ansible est une plateforme de gestion de configuration et d&#39;orchestration open source. Elle permet d&#39;automatiser le déploiement, la configuration et la gestion des applications sur différents serveurs. Ansible utilise une approche déclarative basée sur YAML pour décrire les états souhaités du système, ce qui le rend facile à utiliser et à maintenir.</p><h3 id="ansistrano" tabindex="-1">Ansistrano <a class="header-anchor" href="#ansistrano" aria-label="Permalink to &quot;Ansistrano&quot;">​</a></h3><p>Ansistrano est une extension d&#39;Ansible spécifiquement conçue pour le déploiement d&#39;applications web. Il fournit des rôles et des playbooks prédéfinis pour gérer les différentes étapes du déploiement, telles que la mise à jour du code source, la gestion des dépendances et la configuration du serveur. Ansistrano simplifie le processus de déploiement et assure une meilleure cohérence entre les différentes phases.</p><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>Docker est une plateforme de virtualisation légère qui permet de créer, de distribuer et d&#39;exécuter des applications dans des conteneurs isolés. Les conteneurs Docker sont autonomes et portables, ce qui facilite le déploiement d&#39;applications sur différentes plateformes. Docker offre également des fonctionnalités de gestion des ressources et de mise à l&#39;échelle, ce qui est particulièrement utile pour optimiser les coûts sur le serveur.</p><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h3><p>En utilisant ces technologies, nous pourrons bénéficier de la flexibilité de VirtualBox, de l&#39;automatisation de déploiement d&#39;Ansible et Ansistrano, ainsi que de la portabilité des conteneurs Docker.</p>',19),r=[o];function n(l,u,c,d,p,m){return t(),s("div",null,r)}const b=e(a,[["render",n]]);export{f as __pageData,b as default};