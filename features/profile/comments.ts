import { Comment } from "./types";

export async function fetchComments(): Promise<Comment[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          author: "Veno",
          text: "Zelo prijeten za vožnjo. Hitro dogovorjen.",
          rating: 5,
        },
        {
          id: "2",
          author: "Luka",
          text: "Najaci boss!",
          rating: 5,
        },
        {
          id: "3",
          author: "Tomaž",
          text: "Zamuja 10 minut, ampak pelje solidno.",
          rating: 4,
        },
      ]);
    }, 1000);
  });
}