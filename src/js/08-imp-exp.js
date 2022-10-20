import heroes from '../data/heroes';

export const getHeroById = (id) => heroes.find( (hero) => hero.id === id );

export const getHerosByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );

