"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <Card className="bg-white/80 border-[#d79a97]/20 hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6">
      <Icon className="w-6 h-6 text-[#d35c54] mb-4" />
      <h3 className="font-medium text-[#723738] mb-2">{title}</h3>
      <p className="text-[#8f4e4e]">{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;