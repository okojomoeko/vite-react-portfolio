export interface Work {
  Name: string;
  OverView: string;
  Description: string;
  ImgPath: string;
  Technology: string[];
}

export interface AboutData {
  YearHeader: string;
  MainHeader: string;
  Description: string;
}

export interface Skill {
  title: string;
  listData: string[];
}

export interface Interest {
  title: string;
  listData: string[];
}

declare module "../../assets/templates/works_template.json" {
  const worksList: Work[];
  export default worksList;
}

declare module "../../assets/templates/about_template.json" {
  const aboutData: AboutData[];
  export default aboutData;
}

declare module "../../assets/templates/skills_template.json" {
  const skillsList: Skill[];
  export default skillsList;
}

declare module "../../assets/templates/interests_template.json" {
  const interestsList: Interest[];
  export default interestsList;
}
