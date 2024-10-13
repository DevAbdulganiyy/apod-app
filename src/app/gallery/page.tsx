import ApodGallery from "@/components/ApodGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <main className="p-4 bg-black text-white min-h-screen flex flex-col gap-4">
      <Link
        href="/"
        className="text-white flex gap-1 p-2 rounded-sm w-48 text-center cursor-pointer"
      >
        <ArrowLeft />
        Go back
      </Link>
      <ApodGallery />
    </main>
  );
};

export default Gallery;
