export interface GroupedSkills {
  [key: string]: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  experience: number;
}
