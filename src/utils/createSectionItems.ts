import type MenuItem from "../interfaces/menuItems";
import type {Block, BlockResponse} from "../interfaces/tableRow";

export default function createSectionItems(sectionList:BlockResponse /* defaultMenuItems:MenuItem[] */) {
   const titoloDellaPagina = sectionList.results.map((list:Block) => list.table_row.cells![0][1].plain_text);
   const sottotitoloDellaPagina = sectionList.results.map((list:Block) => list.table_row.cells![1][1].plain_text);
   const titoloBiografia = sectionList.results.map((list:Block) => list.table_row.cells![2][1].plain_text);

   const blockId = sectionList.results.map((list:Block) => {
       return list.table_row.cells![3][0] && list.table_row.cells![3][0].plain_text
           ? list.table_row.cells![3][0].plain_text
           : null;
   });

   const menuItems = titoloDellaPagina.map((item, index) => ({
       titoloDellaPagina: item,
       sottotitoloDellaPagina: sottotitoloDellaPagina[index],
       titoloBiografia: titoloBiografia[index],
   }));

   return menuItems.length > 0 && menuItems  /*: defaultMenuItems - change && to ? */
}