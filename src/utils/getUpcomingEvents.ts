import { env } from '@/env';
import { EventsSchema } from '@/types/event';
import { changeCityName } from '@/utils/changeCityName';

export const getUpcomingEvents = async () => {
	try {
		const upcomingEventsRes = await fetch(env.EVENTS_API_URL);

		const upcomingEventsJson = await upcomingEventsRes.json();
		const data = EventsSchema.parse(upcomingEventsJson);

		if (!data) {
			return null;
		}

		return Object.values(data).map(changeCityName);
	} catch (error) {
		console.log(error);
		return null;
	}
};
