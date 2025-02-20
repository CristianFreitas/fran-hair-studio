"use client";

import React from "react";
import Image from "next/image";
import { Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  time: string;
  price: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  time, 
  price, 
  image 
}) => (
  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-[#d79a97] bg-white hover:bg-[#edd7d6]/5">
    <CardContent className="p-0">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 right-4">
          <Heart className="w-5 h-5 text-white group-hover:fill-white transition-colors" />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-lg text-[#723738]">{title}</h4>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center text-[#8f4e4e]">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </span>
          <span className="font-medium text-[#723738]">{price}</span>
        </div>
        <Button
          className="w-full bg-[#d35c54] hover:bg-[#723738] text-white shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => (window.location.href = "/login")}
        >
          Agendar
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ServiceCard;