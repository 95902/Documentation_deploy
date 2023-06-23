import{_ as e,a as s,b as t,c as a,d as o,e as l,f as i,g as n}from"./chunks/remotessh10.80a27fbb.js";import{_ as r,o as u,c,O as p}from"./chunks/framework.1bc11817.js";const m="/assets/remotessh1.8e93be08.jpg",A=JSON.parse(`{"title":"Procédure d'installation pour l'extension Remote - SSH dans Visual Studio Code","description":"","frontmatter":{},"headers":[],"relativePath":"Remmote_ssh_master.md","filePath":"Remmote_ssh_master.md"}`),d={name:"Remmote_ssh_master.md"},h=p('<h1 id="procedure-d-installation-pour-l-extension-remote-ssh-dans-visual-studio-code" tabindex="-1">Procédure d&#39;installation pour l&#39;extension Remote - SSH dans Visual Studio Code <a class="header-anchor" href="#procedure-d-installation-pour-l-extension-remote-ssh-dans-visual-studio-code" aria-label="Permalink to &quot;Procédure d&#39;installation pour l&#39;extension Remote - SSH dans Visual Studio Code&quot;">​</a></h1><h2 id="instalation-de-l-extension-remote-ssh" tabindex="-1">Instalation de l&#39;extension &quot;Remote - SSH&quot; <a class="header-anchor" href="#instalation-de-l-extension-remote-ssh" aria-label="Permalink to &quot;Instalation de l&#39;extension &quot;Remote - SSH&quot;&quot;">​</a></h2><ol><li><p>Ouvrez Visual Studio Code sur votre machine.</p></li><li><p>Cliquez sur l&#39;icône des extensions dans la barre latérale de gauche ou utilisez le raccourci clavier Ctrl+Shift+X (Windows/Linux) pour accéder à la vue des extensions.</p></li><li><p>Dans la barre de recherche des extensions, tapez &quot;Remote - SSH&quot; et appuyez sur Entrée. Vous verrez une liste d&#39;extensions correspondantes.</p></li><li><p>Localisez l&#39;extension &quot;Remote - SSH&quot; dans la liste et cliquez sur le bouton &quot;Installer&quot; à côté de celle-ci.</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+m+'" alt="An image"></p></details></li><li><p>Une fois l&#39;installation terminée, vous pouvez cliquer sur le bouton &quot;Redémarrer&quot; pour activer l&#39;extension ou choisir de redémarrer ultérieurement.</p></li><li><p>Une fois que Visual Studio Code a redémarré, vous pouvez commencer à utiliser l&#39;extension Remote - SSH.</p></li></ol><h2 id="connection-remote-ssh" tabindex="-1">Connection &quot;Remote - SSH&quot; <a class="header-anchor" href="#connection-remote-ssh" aria-label="Permalink to &quot;Connection &quot;Remote - SSH&quot;&quot;">​</a></h2><ol start="7"><li><p>Pour se connecter à un hôte distant via SSH, cliquez sur l&#39;extension explorateur distant et sélectionnez nouveau distant.</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+e+'" alt="An image"></p></details></li><li><p>Taper dans l&#39;onglet les informations de votre machine master comme ce-ci :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh deploy@</span><span style="color:#F78C6C;">111.222</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">33.44</span></span></code></pre></div></li><li><p>Sélectionner le fichier de configuration SSH à mettre à jour .</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+s+`" alt="An image"></p></details></li><li><p>Ouvrer le fichier de configuration SSH et taper les détails de connexion</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">*********</span></span>
<span class="line"><span style="color:#A6ACCD;">        HostName </span><span style="color:#89DDFF;">***.***.***.***</span></span>
<span class="line"><span style="color:#A6ACCD;">        User deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        IdentityFile </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\*</span><span style="color:#C3E88D;">****</span><span style="color:#A6ACCD;">\\*\\*</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div></li><li><p>Actualiser l&#39;explorateur distant</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="`+t+'" alt="An image"></p></details></li><li><p>Cliquer sur le bouton ce connecter dans un nouvelle onglet</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+a+'" alt="An image"></p></details></li><li><p>Sélectioner la plateforme linux pour le remote</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+o+'" alt="An image"></p></details></li><li><p>Entrer la phrase secrète pour vous connecter</p><details class="details custom-block"><summary>Voir l&#39;image</summary><p><img src="'+l+'" alt="An image"></p></details></li><li><p>Ouvrer l&#39;explorateur de fichier, puis le dossier et seclectioner l&#39;empacement de la racine du projet.</p><details class="details custom-block"><summary>Details</summary><p><img src="'+i+'" alt="An image"></p></details></li><li><p>Sélectioner la plateforme linux pour le remote, Ouvrer l&#39;explorateur de fichier et vous devriez avoir un résultat comme l&#39;image ci-dessous</p><details class="details custom-block"><summary>Details</summary><p><img src="'+n+'" alt="An image"></p></details></li></ol><p>L&#39;intallation du remote ssh pour la master est terminer</p><p>N&#39;hésitez pas à consulter la documentation officielle de l&#39;extension Remote - SSH pour plus d&#39;informations et de détails sur son utilisation :</p><ul><li><a href="https://code.visualstudio.com/docs/remote/ssh" target="_blank" rel="noreferrer">Documentation Remote - SSH de Visual Studio Code</a></li><li><a href="https://www.youtube.com/watch?v=rh1Ag41J6IA" target="_blank" rel="noreferrer">Vidéo de présentation de l&#39;extension Remote SSH sur la chaîne YouTube officielle de Visual Studio Code</a></li></ul><p>Cette documentation fournit des instructions détaillées ainsi que des captures d&#39;écran pour vous aider à comprendre et à utiliser pleinement l&#39;extension Remote - SSH dans Visual Studio Code.</p>',9),_=[h];function S(g,y,C,f,x,v){return u(),c("div",null,_)}const D=r(d,[["render",S]]);export{A as __pageData,D as default};
