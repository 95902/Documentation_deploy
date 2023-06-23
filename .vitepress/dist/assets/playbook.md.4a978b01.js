import{_ as s,o as n,c as a,O as e}from"./chunks/framework.1bc11817.js";const _=JSON.parse(`{"title":"Procédure d'intégration d'un dossier playbook dans un projet","description":"","frontmatter":{},"headers":[],"relativePath":"playbook.md","filePath":"playbook.md"}`),o={name:"playbook.md"},l=e(`<h1 id="procedure-d-integration-d-un-dossier-playbook-dans-un-projet" tabindex="-1">Procédure d&#39;intégration d&#39;un dossier playbook dans un projet <a class="header-anchor" href="#procedure-d-integration-d-un-dossier-playbook-dans-un-projet" aria-label="Permalink to &quot;Procédure d&#39;intégration d&#39;un dossier playbook dans un projet&quot;">​</a></h1><ol><li><p>Récupérer le dossier playbook fournie et glisser le dans le projet .</p><details class="details custom-block"><summary>Structure du dossier</summary><pre><code>playbook/
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
</code></pre></details><div class="tip custom-block"><p class="custom-block-title"><a href="/instalation_VirtualBox.html">Plus d&#39;information concernat la création d&#39;un role</a>.</p></div></li><li><p>Ouvrer le ficher hosts qui ce trouve dans inventory .</p></li><li><p>Modifier les informations des serveurs ce trouvant dans ce fichier.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[marster]</span></span>
<span class="line"><span style="color:#A6ACCD;">    marster ansible_host</span><span style="color:#89DDFF;">=***.***.**.***</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    [dev_serveur]</span></span>
<span class="line"><span style="color:#A6ACCD;">    dev_serveur ansible_host</span><span style="color:#89DDFF;">=***.***.**.***</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    [all:vars]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ansible_python_interpreter</span><span style="color:#89DDFF;">=/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">python3</span></span></code></pre></div></li></ol>`,2),t=[l];function r(p,i,c,d,u,y){return n(),a("div",null,t)}const h=s(o,[["render",r]]);export{_ as __pageData,h as default};
