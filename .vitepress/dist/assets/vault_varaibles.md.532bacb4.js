import{_ as n,o,c as i,z as e,t,a as s,O as a}from"./chunks/framework.497e2c23.js";const A=JSON.parse('{"title":"Gestion des variables chiffrées avec Ansible Vault","description":"","frontmatter":{},"headers":[],"relativePath":"vault_varaibles.md","filePath":"vault_varaibles.md"}'),r={name:"vault_varaibles.md"},p=e("h1",{id:"gestion-des-variables-chiffrees-avec-ansible-vault",tabindex:"-1"},[s("Gestion des variables chiffrées avec Ansible Vault "),e("a",{class:"header-anchor",href:"#gestion-des-variables-chiffrees-avec-ansible-vault","aria-label":'Permalink to "Gestion des variables chiffrées avec Ansible Vault"'},"​")],-1),c=e("h2",{id:"chiffrement-des-variables",tabindex:"-1"},[s("Chiffrement des variables "),e("a",{class:"header-anchor",href:"#chiffrement-des-variables","aria-label":'Permalink to "Chiffrement  des variables"'},"​")],-1),u=e("p",null,"Pour gérer vos variables chiffrées en toute sécurité avec Ansible Vault, suivez la procédure ci-dessous :",-1),d=a(`<li><p>Créez un fichier de variables chiffrées à l&#39;aide de la commande suivante (s&#39;il n&#39;est pas créer) :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault create nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira un éditeur de texte pour entrer vos variables chiffrées. Si vous utilisez Ansible Vault pour la première fois, vous devrez définir un mot de passe pour le fichier chiffré.</p></li><li><p>Ajoutez vos variables dans le fichier ouvert. Par exemple :</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_shared_path: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/*****</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">****_deploy_to: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/****/****/******/*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">vault_ansistrano_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">****************************</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_db</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_user</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">********</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">mysql_password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*********</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>Enregistrez et fermez le fichier lorsque vous avez terminé.</p></li><li><p>Vous pouvez également éditer un fichier de variables existant en utilisant la commande suivante :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault edit nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela ouvrira l&#39;éditeur de texte avec le contenu chiffré du fichier, vous permettant de modifier les variables existantes.</p><details class="details custom-block"><summary>Commandes suplémentaire</summary><ul><li><p>Pour chiffrer un fichier de variables non chiffrées existant, utilisez la commande :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault encrypt nom_fichier_variables_non_chiffrees.yml</span></span></code></pre></div><p>Cela chiffrera le fichier spécifié et créera un nouveau fichier chiffré avec l&#39;extension <code>.vault</code>. Le fichier d&#39;origine sera préservé et vous pouvez le supprimer en toute sécurité une fois que vous êtes sûr que le fichier chiffré fonctionne correctement.</p></li><li><p>Pour décrypter un fichier chiffré et le rendre accessible en clair, utilisez la commande :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ansible-vault decrypt nom_fichier_variables_chiffrees.yml</span></span></code></pre></div><p>Cela supprimera le chiffrement du fichier spécifié et vous pourrez le modifier comme un fichier de variables normal.</p></li></ul></details></li>`,4),f=a(`<p>Par exemple, si vous avez une tâche pour configurer un fichier de configuration avec le mot de passe de la base de données dans un docker-compose :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">db:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: mysql:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: db</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_DATABASE: &quot;{{ mysql_db }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_USER: &quot;{{ mysql_user }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_PASSWORD: &quot;{{ mysql_password }}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        MYSQL_ROOT_PASSWORD: &quot;{{ mysql_password }}&quot;</span></span></code></pre></div><p>Dans cet exemple,<code>{mysql_password}</code>,<code>{mysql_user}</code>,<code>{mysql_db}</code> sont les variables chiffrées que vous avez définie dans le fichier vars/nom_fichier_variables_chiffrees.yml.</p>`,3),v=e("p",null,"Ceci conclut la procédure pour utiliser Ansible Vault et gérer vos variables chiffrées de manière sécurisée.",-1);function m(l,h,_,y,D,C){return o(),i("div",null,[p,c,u,e("ol",null,[d,e("li",null,[e("p",null,"Dans les tâches ou les modèles de votre rôle, vous pouvez référencer les variables chiffrées en utilisant la syntaxe "+t(l.vault_variable_name)+".",1),f])]),v])}const F=n(r,[["render",m]]);export{A as __pageData,F as default};