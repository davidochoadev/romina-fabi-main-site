import type MenuItem from "../interfaces/menuItems";

export default function getDefaultMenuItems(menuName: string){
   const defaultMenuItems : MenuItem[] = []

   switch(menuName) {
      case 'SERVIZI': 
         defaultMenuItems.push(
            { denominazione: 'CONSULENZA', hasChildren: true, link: '/servizi/consulenze', blockIdSubMenu: null},
            { denominazione: 'TRATTAMENTI', hasChildren: false, link: '/servizi/trattamenti', blockIdSubMenu: null },
            { denominazione: 'PERCORSI', hasChildren: false, link: '/servizi/percorsi', blockIdSubMenu: null}
         );
         break;
      case 'CONSULENZE':
         defaultMenuItems.push(
            {denominazione: 'CONSULTO TAROLOGICO', hasChildren: false, link: '/servizi/consulenze/consulto-tarologico', blockIdSubMenu: null}
         )
         break;
      case 'BLOG':
         defaultMenuItems.push(
            { denominazione: 'STESE', hasChildren: true, link: '/blog/stese', blockIdSubMenu: null},
            { denominazione: 'SPIRITUALITA', hasChildren: false, link: '/blog/spiritualita', blockIdSubMenu: null },
            { denominazione: 'ESOTERISMO', hasChildren: false, link: '/blog/esoterismo', blockIdSubMenu: null},
            { denominazione: 'BIOENERGETICA', hasChildren: false, link: '/blog/bioenergetica', blockIdSubMenu: null}
         );
         break;
      case 'RISORSE': 
         defaultMenuItems.push(
            { denominazione: 'MAZZI', hasChildren: true, link: '/risorse/mazzi', blockIdSubMenu: null},
         );
         break;
      case 'MAIN':
         defaultMenuItems.push(
            { denominazione: 'HOME', hasChildren: false, link: '/', blockIdSubMenu: null},
            { denominazione: 'IDENTITÀ', hasChildren: false, link: '/identita', blockIdSubMenu: null },
            { denominazione: 'SERVIZI', hasChildren: true, link: '/servizi', blockIdSubMenu: 'c55ed2a9d965487b8beaae63a33c5b01' },
            { denominazione: 'BLOG', hasChildren: true, link: '/blog', blockIdSubMenu: '33698a06c8ac438bbc91ab7f5b6e96b7' },
            { denominazione: 'RISORSE', hasChildren: true, link: '/risorse', blockIdSubMenu: 'b07f489a6a9145b7a4fab0a69625beb7' },
            { denominazione: 'DONAZIONI', hasChildren: false, link: '/donazioni', blockIdSubMenu: null},
            { denominazione: 'CONTATTI', hasChildren: false, link: '/contatti', blockIdSubMenu: null },
            { denominazione: 'DISCLAIMER', hasChildren: false, link: '/disclaimer', blockIdSubMenu: null}
         )
         break;
   }
   return defaultMenuItems;
}