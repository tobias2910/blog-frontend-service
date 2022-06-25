export interface SkillData {
  languages: Skill[];
  frameworks: Skill[];
  technologies: Skill[];
  methodologies: Skill[];
}

export interface Skill {
  id: number;
  value: string;
}
