import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation déploiement",
  description: "Déploiement Ansistrano",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/Documentation_deploy/' },
      { text: 'Instalation', link: '/Documentation_deploy/presentation' },
      { text: 'Documentation', link: '/Documentation_deploy/markdown-examples' }
   
    ],

    sidebar: [
      {
        text: 'Présentation',
        collapsed: true,
        items: [
          { text: 'Présentation', link: '/Documentation_deploy/presentation' },
        ]
      },
      {
        text: 'Instalation',
        collapsed: false,
        items: [
          { text: 'Instalation de VirtualBox', link: '/Documentation_deploy/instalation_VirtualBox' },
          { text: 'Transfert de clés avec FileZilla', link: '/Documentation_deploy/Transfert_cles' },
          { text: 'Connection à visual studio (master)', link: '/Documentation_deploy/Remmote_ssh_master' },
          { text: 'Intégration du playbook', link: '/Documentation_deploy/playbook'},
          { text: "Création d'un role ansitrano ", link: '/Documentation_deploy/creation_role_ansistrano' },
          { text: "Initialisation d'un role", link: '/Documentation_deploy/initialisation_role' },
          { text: "Github token",link:'/Documentation_deploy/creation_token_github'},
          { text: "Vaults des varaibles",link:'/Documentation_deploy/vault_varaibles'},
          { text: "Lancement du playbook",link:'/Documentation_deploy/lancement_playbook'},
          { text: "Connection à visual studio (dev)",link:'/Documentation_deploy/Remmote_ssh_dev'},
          { text: "Extension Docker (dev)",link:'/Documentation_deploy/extension_docker'},
          { text: "Fichier host",link:'/Documentation_deploy/fichier_hosts'},
          { text: 'Lancement du projet', link: '/Documentation_deploy/markdown-examples' },
          { text: 'Markdown Examples', link: '/Documentation_deploy/markdown-examples' },
          { text: 'Runtime API Examples', link: '/Documentation_deploy/api-examples' }
        ]
      },
      {
        text: 'Documentation',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/Documentation_deploy/markdown-examples' },
          { text: 'Reload apache ', link: '/Documentation_deploy/reload_apach2' },
          { text: 'Runtime API Examples', link: '/Documentation_deploy/api-examples' },
          { text: 'Instalation de VirtualBox', link: '/Documentation_deploy/instalation_VirtualBox' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/INNOSYSFRANCE/assurmix_inte' }
    ]
    
  }

  
})
