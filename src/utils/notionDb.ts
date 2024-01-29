import {Client} from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.NOTION_SECRET });
// replace with your own database ID
const databaseId = import.meta.env.BLOG_DATABASE_KEY;


const getLastElements = async () => {
	const response = await notion.databases.query({
	  database_id: databaseId!,
	  sorts: [
	    { timestamp: "created_time", direction: "descending" }
	  ],
     page_size: 3,
	});
  return response;
}

export default getLastElements