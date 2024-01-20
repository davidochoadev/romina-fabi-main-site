export default interface MenuItem {
   denominazione: string,
   hasChildren: boolean,
   link: string,
   blockIdSubMenu: string | null,
}