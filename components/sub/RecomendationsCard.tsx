import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  job: string;
  description: string;
}

const RecomendationsCard = ({ src, title, job, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex">
    {/* Left Column for Text */}
    <div className="flex-2 p-4">
      <span className="text-2xl font-semibold text-white">{title}</span> <span className="text font-semibold text-white"> ({job})</span>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>

    {/* Right Column for Image */}
    <div className="w-4/5">
      <Image
        src={src}
        alt={title}
        width={50}
        height={50}
        className="w-full object-contain"
      />
    </div>
  </div>
  );
};

export default RecomendationsCard;
