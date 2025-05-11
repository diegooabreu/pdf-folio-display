
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PDFCardProps {
  title: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
  pdfFileName?: string;
}

const PDFCard = ({ title, description, downloadUrl, imageUrl, pdfFileName }: PDFCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const downloadFileName = pdfFileName || `${title.toLowerCase().replace(/\s+/g, '-')}-catalog.pdf`;
  
  return (
    <>
      <Card className="w-full transition-all duration-300 hover:shadow-lg">
        <AspectRatio ratio={16 / 9} className="bg-white flex items-center justify-center p-4 border-b">
          <img
            src={imageUrl}
            alt={`${title} logo`}
            className="object-contain h-full max-h-32 w-auto"
            onError={(e) => {
              console.error(`Failed to load image: ${imageUrl}`);
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsDialogOpen(true)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Visualizar Catálogo
          </Button>
          <Button asChild className="w-full">
            <a href={downloadUrl} download={downloadFileName}>
              <Download className="mr-2 h-4 w-4" />
              Download Catálogo
            </a>
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl h-[90vh]">
          <DialogHeader>
            <DialogTitle>Catálogo {title}</DialogTitle>
            <DialogDescription>Visualização do catálogo de produtos</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-full w-full">
            <div className="h-[80vh] w-full">
              <iframe 
                src={`${downloadUrl}#view=FitH`}
                title={`${title} Catalog`}
                className="w-full h-full border-0"
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PDFCard;
