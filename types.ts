
export interface Lecture {
  id: string;
  title: string;
  duration: string;
}

export interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  longDescription: string;
  rating: number;
  reviews: number;
  price: number;
  imageUrl: string;
  category: string;
  curriculum: Section[];
}
