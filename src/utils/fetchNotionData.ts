const notionSecret = import.meta.env.NOTION_SECRET;

export default async function fetchNotionData(endpoint: string, type: string, children: boolean) {
   const options = {
     Authorization: `Bearer ${notionSecret}`,
     "Notion-Version": "2022-06-28",
     "Content-Type": "application/json",
   };

   // Costruisci l'URL in base al valore di 'children'
   const url = `https://api.notion.com/v1/${type}/${endpoint}${children ? '/children' : ''}`;

   const response = await fetch(url, {
     method: 'GET',
     headers: options
   });

   if (!response.ok) {
     throw new Error(`Error fetching Notion data: ${response.status}`);
   }

   return response.json();
}
