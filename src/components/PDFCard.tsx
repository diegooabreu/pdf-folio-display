
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface PDFCardProps {
  title: string;
  description: string;
  downloadUrl: string;
}

const PDFCard = ({ title, description, downloadUrl }: PDFCardProps) => {
  return (
    <Card className="w-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <a href={downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PDFCard;
