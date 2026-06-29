import p1 from "@/assets/photo-1.jpg.asset.json";
import p2 from "@/assets/photo-2.jpg.asset.json";
import p3 from "@/assets/photo-3.jpg.asset.json";
import p4 from "@/assets/photo-4.jpg.asset.json";
import p5 from "@/assets/photo-5.jpg.asset.json";
import p6 from "@/assets/photo-6.jpg.asset.json";
import p7 from "@/assets/photo-7.jpg.asset.json";
import p8 from "@/assets/photo-8.jpg.asset.json";
import p9 from "@/assets/photo-9.jpg.asset.json";
import p10 from "@/assets/photo-10.jpg.asset.json";

export type Photo = {
  src: string;
  title: string;
  place: string;
  year: string;
  w: number;
  h: number;
};

export const photos: Photo[] = [
  { src: p5.url, title: "Bougainvillea Lane", place: "North Kolkata", year: "2024", w: 1600, h: 1060 },
  { src: p3.url, title: "The Wanderer", place: "Kolkata", year: "2024", w: 1066, h: 1600 },
  { src: p4.url, title: "Local Line", place: "Sealdah", year: "2024", w: 1067, h: 1600 },
  { src: p6.url, title: "Under Howrah", place: "Mullick Ghat", year: "2024", w: 1060, h: 1600 },
  { src: p9.url, title: "Painted Quarter", place: "Kumartuli", year: "2024", w: 1600, h: 1060 },
  { src: p10.url, title: "Faces of Clay", place: "Kumartuli", year: "2024", w: 1600, h: 1060 },
  { src: p7.url, title: "The Quiet Hour", place: "Central Kolkata", year: "2024", w: 900, h: 1600 },
  { src: p8.url, title: "Looking Up", place: "Old Calcutta", year: "2024", w: 1060, h: 1600 },
  { src: p1.url, title: "Sun, Bird, Branch", place: "Outskirts of Kolkata", year: "2023", w: 1537, h: 1023 },
  { src: p2.url, title: "Bay of Bengal", place: "Digha", year: "2024", w: 1600, h: 1200 },
];
