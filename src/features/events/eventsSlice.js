import { EVENTS } from '../../app/shared/EVENTS';

export const selectAllEvents = () => {
    return EVENTS;
}

export const selectFeaturedEvent = () => {
    return EVENTS.find((event) => event.featured)
}