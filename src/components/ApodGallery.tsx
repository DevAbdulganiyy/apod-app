"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import { fetchHistoricalApods } from "@/services/apod";
import { Loader2 } from "lucide-react";

interface ApodGalleryProps {
  apods: Array<{ title: string; date: string; url: string }>;
}

const ApodGallery: React.FC<any> = () => {
  const [count, setCount] = useState<number>(10);
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const { data, error, isLoading, refetch } = useQuery("apods", () =>
    fetchHistoricalApods(count, startDate, endDate)
  );

  console.log(data);

  const apods = data;

  const handleFetch = () => {
    refetch(); // Trigger refetch manually when button clicked or inputs change
  };

  //   if (isLoading)
  //     return (
  //       <div className="flex flex-col bg-black h-screen w-full  items-center justify-center">
  //         <Loader2 className="animate-spin text-white w-10 h-10" />
  //         <p className="text-white">Loading...</p>
  //       </div>
  //     );
  //   if (error)
  //     return (
  //       <div className="flex flex-col bg-black h-screen w-full  items-center justify-center">
  //         Error fetching Historical Apods
  //       </div>
  //     );

  return (
    <>
      {/* Input for count */}
      <div>
        <label className="text-white">Count (Number of Images):</label>
        <input
          type="number"
          value={count || ""}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder="Enter count"
          className="border-white border-[1px] rounded-md p-2 text-black ml-2"
        />
      </div>

      {/* Date Range Inputs */}
      <div>
        <label className="text-white">Start Date:</label>
        <input
          type="date"
          value={startDate || ""}
          onChange={(e) => setStartDate(e.target.value)}
          className="border-white border-[1px] rounded-md p-2 text-black ml-2 placeholder:text-black"
        />
      </div>
      <div>
        <label className="text-white">End Date:</label>
        <input
          type="date"
          value={endDate || ""}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="YYYY-MM-DD"
          className="border-white border-[1px] rounded-md p-2 text-black ml-2 placeholder:text-black"
        />
      </div>

      {/* Fetch Button */}
      <button
        onClick={handleFetch}
        className="text-white mt-2 bg-slate-700 p-2 rounded-sm w-48 text-center cursor-pointer"
      >
        Fetch APODs
      </button>
      {isLoading && (
        <div className="flex flex-col bg-black w-full  items-center justify-center">
          <Loader2 className="animate-spin text-white w-10 h-10" />
          <p className="text-white">Loading...</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col bg-black h-screen w-full  items-center justify-center">
          Error fetching Historical Apods
        </div>
      )}
      <div className="flex flex-col bg-black gap-4">
        {apods
          ?.filter((apod: any) => apod.media_type === "image")
          .map((apod: any) => (
            <div
              key={apod.date}
              className="flex flex-col gap-4 border-white border-[1px] rounded-md p-4 text-white"
            >
              <Image src={apod.url} alt={apod.title} width={300} height={300} />
              <p>{apod.title}</p>
              <p>{apod?.explanation}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ApodGallery;
