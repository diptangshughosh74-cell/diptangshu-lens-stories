import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

export type Photo = {
  src: string;
  title: string;
  place: string;
  year: string;
  w: number;
  h: number;
};

export const photos: Photo[] = [
  { src: g1, title: "Cups of Patience", place: "North Kolkata", year: "2024", w: 1024, h: 1280 },
  { src: g2, title: "Yellow in Motion", place: "Esplanade", year: "2023", w: 1280, h: 896 },
  { src: g3, title: "Weather of a Face", place: "Kumartuli", year: "2024", w: 1024, h: 1280 },
  { src: g4, title: "Monsoon Cricket", place: "Bowbazar", year: "2023", w: 1280, h: 960 },
  { src: g5, title: "Crossing Howrah", place: "Howrah Bridge", year: "2022", w: 1280, h: 1600 },
  { src: g6, title: "Light of Devotion", place: "Durga Puja", year: "2024", w: 1280, h: 896 },
  { src: g7, title: "Marigold Hour", place: "Mullick Ghat", year: "2023", w: 1024, h: 1280 },
  { src: g8, title: "Tramways", place: "BBD Bagh", year: "2022", w: 1280, h: 960 },
];
