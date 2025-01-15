interface Film {
  properties: {
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
    opening_crawl: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  };
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface FilmsResponse {
  result: Film[];
  message?: string;
}

export interface Character {
  name: string;
  uid: string;
}

export interface CharactersResponse {
  message: string;
  results: Character[];
}
