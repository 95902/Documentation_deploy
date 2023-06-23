import{_ as s,o as e,c as n,O as a}from"./chunks/framework.1bc11817.js";const m=JSON.parse(`{"title":"Initialisation d'un rôle Ansible","description":"","frontmatter":{},"headers":[],"relativePath":"docs/initialisation_role.md","filePath":"docs/initialisation_role.md"}`),l={name:"docs/initialisation_role.md"},o=a(`<h1 id="initialisation-d-un-role-ansible" tabindex="-1">Initialisation d&#39;un rôle Ansible <a class="header-anchor" href="#initialisation-d-un-role-ansible" aria-label="Permalink to &quot;Initialisation d&#39;un rôle Ansible&quot;">​</a></h1><h2 id="procedure-detaillee-pour-l-initialisation-d-un-role-ansible" tabindex="-1">Procédure détaillée pour l&#39;initialisation d&#39;un rôle Ansible <a class="header-anchor" href="#procedure-detaillee-pour-l-initialisation-d-un-role-ansible" aria-label="Permalink to &quot;Procédure détaillée pour l&#39;initialisation d&#39;un rôle Ansible&quot;">​</a></h2><ol><li><p>Ouvrez un terminal ou une invite de commandes.</p></li><li><p>Utilisez la commande suivante pour initialiser un nouveau rôle Ansible en spécifiant le nom du rôle et le chemin où vous souhaitez créer le rôle :</p><p>Remplacez &quot;nom_du_role&quot; par le nom que vous souhaitez donner à votre rôle. Par exemple, si vous souhaitez créer un rôle appelé &quot;mon_role&quot;, la commande serait :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-galaxy init mon_role</span></span></code></pre></div></li><li><p>Après l&#39;exécution de la commande, un nouveau répertoire portant le nom du rôle sera créé dans le répertoire actuel.</p><details class="details custom-block"><summary>Ce répertoire contiendra la structure de base du rôle Ansible, y compris les répertoires suivants :</summary><ul><li><p><strong>defaults/</strong> : Ce répertoire contient le fichier <code>main.yml</code> qui définit les variables par défaut pour le rôle.</p></li><li><p><strong>files/</strong> : Ce répertoire contient les fichiers statiques nécessaires au rôle. Par exemple, <code>config.ini</code> et un sous-répertoire <code>scripts/</code> contenant des scripts exécutables.</p></li><li><p><strong>handlers/</strong> : Ce répertoire contient le fichier <code>main.yml</code> qui définit les gestionnaires (handlers) utilisés dans le rôle.</p></li><li><p><strong>meta/</strong> : Ce répertoire contient le fichier <code>main.yml</code> qui fournit des métadonnées sur le rôle, telles que les dépendances avec d&#39;autres rôles.</p></li><li><p><strong>tasks/</strong> : Ce répertoire contient le fichier <code>main.yml</code> qui contient les tâches à exécuter pour le rôle.</p></li><li><p><strong>templates/</strong> : Ce répertoire contient les modèles de fichiers utilisés dans le rôle. Par exemple, <code>template.conf.j2</code> est un fichier de modèle utilisant la syntaxe Jinja2.</p></li><li><p><strong>tests/</strong> : Ce répertoire contient les fichiers de test pour le rôle. Il peut inclure un répertoire <code>inventory/</code> contenant des fichiers d&#39;inventaire de test, un fichier <code>requirements.yml</code> spécifiant les dépendances de test, et un fichier <code>test.yml</code> décrivant les scénarios de test.</p></li><li><p><strong>vars/</strong> : Ce répertoire contient les fichiers <code>main.yml</code> et <code>secrets.yml</code> qui définissent les variables utilisées dans le rôle. Le fichier <code>secrets.yml</code> peut contenir des variables sensibles qui doivent être protégées.</p></li><li><p><strong>README.md</strong> : Ce fichier contient la documentation du rôle, décrivant son objectif, son utilisation et d&#39;autres informations pertinentes.</p></li></ul><p>Veuillez noter que cette structure de dossier est une suggestion courante pour un rôle Ansible, mais elle peut être adaptée en fonction des besoins spécifiques du projet.</p></details></li><li><p>Pour la création des fichiers et tâches spécifiques, suivez les étapes ci-dessous :</p><p>a. Tâche &quot;after symlink&quot; (après la création des liens symboliques) :</p><ul><li>Créez un fichier YAML dans le répertoire <code>tasks</code> avec le nom <code>after_symlink.yml</code>.</li></ul><p>Cette tâche peut contenir les actions à effectuer après la création des liens symboliques.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Exécuter des actions après la création des liens symboliques</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;"># Ajoutez ici les actions spécifiques</span></span></code></pre></div><p>b. Tâche &quot;before symlink&quot; (avant la création des liens symboliques) :</p><ul><li>Créez un fichier YAML dans le répertoire <code>tasks</code> avec le nom <code>before_symlink.yml</code>.</li></ul><p>Cette tâche peut contenir les actions à effectuer avant la création des liens symboliques.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Exécuter des actions avant la création des liens symboliques</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># Ajoutez ici les actions spécifiques</span></span></code></pre></div><p>c. Tâche &quot;main&quot; (tâches principales) :</p><ul><li>Créez un fichier YAML dans le répertoire <code>tasks</code> avec le nom <code>main.yml</code>.</li></ul><p>Cette tâche contient les actions principales du rôle.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># tasks file for Lagon_ansistrano</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">correct unsafe git repo error</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">shell</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git config --global --add safe.directory {{ ************}}/repo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">include_role</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ansistrano.deploy</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;"># name: ansistrano.rollback</span></span></code></pre></div><p>d. Templates :</p><ul><li>Créez les templates requis dans le répertoire <code>templates</code>.</li></ul><p>Pour les fichiers <code>docker-compose.yml</code>, <code>Dockerfile</code> et <code>Vhost</code>, créez les fichiers suivants :</p><pre><code> - docker-compose.yml.j2
 - Dockerfile.j2
 - Vhost.j2
</code></pre><p>e. Fichier &quot;db_vars&quot; :</p><ul><li>Créez un fichier YAML dans le répertoire <code>vars</code> avec le nom <code>db_vars.yml</code>.</li></ul><p>Ce fichier peut contenir les variables spécifiques à la base de données.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">db_host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">db_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myuser</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">db_password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mypassword</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">db_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mydatabase</span></span></code></pre></div><p>f. Fichier &quot;main&quot; :</p><ul><li>Le fichier <code>main.yml</code> dans le répertoire <code>vars</code> contient les variable nécéssaire aux déploiement du projet .</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># vars file for Assurmix_inte</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ ****** }}/</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_deploy_via</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_git_branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_git_repo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://{{ *********** }}@github.com/*******/*********.git</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_deploy_to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{{ dest }}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_before_symlink_shared_tasks_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tasks/before_symlink.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_after_symlink_tasks_file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tasks/after_symlink.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ansistrano_keep_releases</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span></code></pre></div></li><li><p>Une fois que vous avez personnalisé les fichiers, les tâches et les templates selon vos besoins spécifiques, vous pouvez les utiliser dans vos playbooks Ansible.</p></li></ol><p>Assurez-vous d&#39;adapter les noms des fichiers, des tâches et des variables en fonction de votre structure et de vos besoins réels.</p>`,4),t=[o];function p(i,r,c,d,u,y){return e(),n("div",null,t)}const D=s(l,[["render",p]]);export{m as __pageData,D as default};