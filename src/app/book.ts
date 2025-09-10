export interface Book {
  title: string;
  author: string;
  description: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=600&fit=crop"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits and break bad ones.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD from Cambridge.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  }
];
