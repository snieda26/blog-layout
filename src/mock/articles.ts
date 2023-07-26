import { v4 as uuid } from "uuid";
import cardImage from "@assets/cardImage.png";

export interface IArticlesData {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export const ArticlesData: IArticlesData[] = [
  {
    id: uuid(),
    image: cardImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit. Neque aliquam vestibulum morbi blandit cursus. Nulla malesuada pellentesque elit eget gravida cum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus. Velit egestas dui id ornare arcu odio ut sem nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a. Sit amet risus nullam eget felis eget nunc. Elementum curabitur vitae nunc sed. Eu facilisis sed odio morbi quis commodo odio aenean. At imperdiet dui accumsan sit amet nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero nunc. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.",
    title: "Intro to Product Design",
    tags: ["UI Design", "Web Design", "Design"],
  },
  {
    id: uuid(),
    image: cardImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit. Neque aliquam vestibulum morbi blandit cursus. Nulla malesuada pellentesque elit eget gravida cum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus. Velit egestas dui id ornare arcu odio ut sem nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a. Sit amet risus nullam eget felis eget nunc. Elementum curabitur vitae nunc sed. Eu facilisis sed odio morbi quis commodo odio aenean. At imperdiet dui accumsan sit amet nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero nunc. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.",
    title: "Intro to Product Design",
    tags: ["UI Design", "Web Design", "Design"],
  },
  {
    id: uuid(),
    image: cardImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit. Neque aliquam vestibulum morbi blandit cursus. Nulla malesuada pellentesque elit eget gravida cum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus. Velit egestas dui id ornare arcu odio ut sem nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a. Sit amet risus nullam eget felis eget nunc. Elementum curabitur vitae nunc sed. Eu facilisis sed odio morbi quis commodo odio aenean. At imperdiet dui accumsan sit amet nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero nunc. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.",
    title: "Intro to Product Design",
    tags: ["UI Design", "Web Design", "Design"],
  },
  {
    id: uuid(),
    image: cardImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit. Neque aliquam vestibulum morbi blandit cursus. Nulla malesuada pellentesque elit eget gravida cum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus. Velit egestas dui id ornare arcu odio ut sem nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a. Sit amet risus nullam eget felis eget nunc. Elementum curabitur vitae nunc sed. Eu facilisis sed odio morbi quis commodo odio aenean. At imperdiet dui accumsan sit amet nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero nunc. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.",
    title: "Intro to Product Design",
    tags: ["UI Design", "Web Design", "Design"],
  },
  {
    id: uuid(),
    image: cardImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit. Neque aliquam vestibulum morbi blandit cursus. Nulla malesuada pellentesque elit eget gravida cum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Elit ut aliquam purus sit amet luctus. Velit egestas dui id ornare arcu odio ut sem nulla. Aliquet lectus proin nibh nisl condimentum id venenatis a. Sit amet risus nullam eget felis eget nunc. Elementum curabitur vitae nunc sed. Eu facilisis sed odio morbi quis commodo odio aenean. At imperdiet dui accumsan sit amet nulla facilisi. Sapien et ligula ullamcorper malesuada proin libero nunc. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi.",
    title: "Intro to Product Design",
    tags: ["UI Design", "Web Design", "Design"],
  },
];
