export type KnownForData = {
  first_air_date: string;
  release_date: string;
  poster_path: string;
  media_type: string;
  original_name: string;
  original_title: string;
  id: number;
};

export type Actor = {
  adult: boolean;
  birthday: string;
  deathday: string;
  gender: number;
  id: number;
  known_for: KnownForData;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type Button = {
  imagePath: string;
  label: string;
};
