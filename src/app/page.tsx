import Link from "next/link";
import ApodCard from "../components/ApodCard";

export default function Home() {
  return (
    <div className="p-4 bg-black text-white h-screen flex flex-col gap-2">
      <h1>Astronomy Picture of the Day</h1>
      <ApodCard />
      <Link
        href="/gallery"
        className="text-white mt-2 bg-slate-700 p-2 rounded-sm w-48 text-center cursor-pointer"
      >
        See Historial Apods
      </Link>
    </div>
  );
}
