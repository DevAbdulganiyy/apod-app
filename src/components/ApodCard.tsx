"use client";
import { useQuery } from "react-query";
import Image from "next/image";
import { Loader2 } from "lucide-react";

import { fetchApod } from "@/services/apod";
interface ApodProps {
  title: string;
  date: string;
  explanation: string;
  url: string;
}

const ApodCard: React.FC<any> = () => {
  const { data, error, isLoading } = useQuery("apod", fetchApod);

  if (isLoading)
    return (
      <div className="flex flex-col bg-black h-screen w-full  items-center justify-center">
        <Loader2 className="animate-spin text-white w-10 h-10" />
        <p className="text-white">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col bg-black h-screen w-full  items-center justify-center">
        Error fetching APOD
      </div>
    );

  console.log(data);

  return (
    <div className="flex flex-col gap-y-4 text-white border-[1px] rounded-md p-4">
      <h2>
        {data?.title} - {data?.date}
      </h2>
      {/* <img src={data?.url} alt={data?.title} width="100%" /> */}
      <Image
        src={data.media_type === "image" ? data.url : ""}
        width={data.media_type === "image" ? 200 : 0}
        height={data.media_type === "image" ? 200 : 0}
        // sizes="100vw"
        className="w-auto h-auto "
        alt={data?.title}
      />

      <p>{data?.explanation}</p>
    </div>
  );
};

export default ApodCard;
