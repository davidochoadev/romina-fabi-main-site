import type MenuItem from "../interfaces/menuItems";
import type {Block, BlockResponse} from "../interfaces/tableRow";

export default function createMenuItems(menuList:BlockResponse, defaultMenuItems:MenuItem[]) {
   const list = menuList.results.map((list:Block) => list.table_row.cells![0][0].plain_text);
   const hasChildren = menuList.results.map((list:Block) => list.table_row.cells![1][0].plain_text);
   const link = menuList.results.map((list:Block) => list.table_row.cells![2][0].plain_text);

   const blockId = menuList.results.map((list:Block) => {
       return list.table_row.cells![3][0] && list.table_row.cells![3][0].plain_text
           ? list.table_row.cells![3][0].plain_text
           : null;
   });

   const menuItems:MenuItem[]= list.map((item, index) => ({
       denominazione: item,
       hasChildren: hasChildren[index] === 'True',
       link: link[index],
       blockIdSubMenu: blockId[index],
   }));

   return menuItems.length > 0 ? menuItems : defaultMenuItems;
}

