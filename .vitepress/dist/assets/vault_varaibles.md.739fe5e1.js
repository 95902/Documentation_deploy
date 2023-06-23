import{_ as l,o as n,c as o,z as s,t as i,a as t,O as e}from"./chunks/framework.1bc11817.js";const A=JSON.parse('{"title":"Gestion des variables chiffrées avec Ansible Vault","description":"","frontmatter":{},"headers":[],"relativePath":"vault_varaibles.md","filePath":"vault_varaibles.md"}'),r={name:"vault_varaibles.md"},p=s("h1",{id:"gestion-des-variables-chiffrees-avec-ansible-vault",tabindex:"-1"},[t("Gestion des variables chiffrées avec Ansible Vault "),s("a",{class:"header-anchor",href:"#gestion-des-variables-chiffrees-avec-ansible-vault","aria-label":'Permalink to "Gestion des variables chiffrées avec Ansible Vault"'},"​")],-1),c=s("p",null,"Pour gérer vos variables chiffrées en toute sécurité avec Ansible Vault, suivez la procédure ci-dessous :",-1),u=e(`<li><p>Créez un fichier de variables chiffrées à l&#39;aide de la commande suivante (s&#39;il n&#39;est pas créer) :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault create nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira un éditeur de texte pour entrer vos variables chiffrées. Si vous utilisez Ansible Vault pour la première fois, vous devrez définir un mot de passe pour le fichier chiffré.</p></li><li><p>Ajoutez vos variables dans le fichier ouvert. Par exemple :</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_shared_path: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/*****</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_deploy_to: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/****/******/*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">vault_ansistrano_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">****************************</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_db</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>Enregistrez et fermez le fichier lorsque vous avez terminé.</p></li><li><p>Vous pouvez également éditer un fichier de variables existant en utilisant la commande suivante :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault edit nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira l&#39;éditeur de texte avec le contenu chiffré du fichier, vous permettant de modifier les variables existantes.</p><details class="details custom-block"><summary>Commandes suplémentaire</summary><ul><li><p>Pour chiffrer un fichier de variables non chiffrées existant, utilisez la commande :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault encrypt nom_fichier_variables_non_chiffrees.yml</span></span></code></pre></div><p>Cela chiffrera le fichier spécifié et créera un nouveau fichier chiffré avec l&#39;extension <code>.vault</code>. Le fichier d&#39;origine sera préservé et vous pouvez le supprimer en toute sécurité une fois que vous êtes sûr que le fichier chiffré fonctionne correctement.</p></li><li><p>Pour décrypter un fichier chiffré et le rendre accessible en clair, utilisez la commande :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault decrypt nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela supprimera le chiffrement du fichier spécifié et vous pourrez le modifier comme un fichier de variables normal.</p></li></ul></details></li>`,4),d=e(`<p>Par exemple, si vous avez une tâche pour configurer un fichier de configuration avec le mot de passe de la base de données dans un docker-compose :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: mysql:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: db</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_DATABASE: &quot;{{ mysql_db }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_USER: &quot;{{ mysql_user }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_PASSWORD: &quot;{{ mysql_password }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_ROOT_PASSWORD: &quot;{{ mysql_password }}&quot;</span></span></code></pre></div><p>Dans cet exemple, mysql_password,mysql_user,mysql_db sont les variables chiffrées que vous avez définie dans le fichier vars/db_vars.yml.</p>`,3),v=e('<li><p>Pour exécuter un playbook Ansible avec des variables chiffrées, utilisez la commande :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-playbook playbook.yml --ask-vault-pass</span></span></code></pre></div><p>Cela demandera le mot de passe du fichier chiffré avant d&#39;exécuter le playbook.</p></li>',1),_=s("p",null,"Ceci conclut la procédure pour utiliser Ansible Vault et gérer vos variables chiffrées de manière sécurisée.",-1);function f(a,y,m,h,C,D){return n(),o("div",null,[p,c,s("ol",null,[u,s("li",null,[s("p",null,"Dans les tâches ou les modèles de votre rôle, vous pouvez référencer les variables chiffrées en utilisant la syntaxe "+i(a.vault_variable_name)+".",1),d]),v]),_])}const g=l(r,[["render",f]]);export{A as __pageData,g as default};
