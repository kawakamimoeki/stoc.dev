import DB from '../data/db.json';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	return { tags: DB.tags };
};
