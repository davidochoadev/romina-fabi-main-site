
export interface BlockResponse {
   object: string;
   results: Block[];
   next_cursor: string | null;
   has_more: boolean;
   type: string;
   block: any;
   request_id: string;
}

export interface Block {
   object: string;
   id: string;
   parent: Parent;
   created_time: string;
   last_edited_time: string;
   created_by: User;
   last_edited_by: User;
   has_children: boolean;
   archived: boolean;
   type: string;
   table_row: TableRow;
}

interface User {
   object: string;
   id: string;
}

interface Parent {
   type: string;
   block_id: string;
}

interface TableRow {
   cells: CellContent[][] | undefined
}

interface CellContent {
   type: string,
   plain_text: string,
   href: null
}

