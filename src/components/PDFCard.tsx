
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PDFCardProps {
  title: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
}

const PDFCard = ({ title, description, downloadUrl, imageUrl }: PDFCardProps) => {
  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" asChild className="w-full">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <FileText className="mr-2 h-4 w-4" />
            View Catalog
          </a>
        </Button>
        <Button asChild className="w-full">
          <a href={downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download Catalog
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PDFCard;
