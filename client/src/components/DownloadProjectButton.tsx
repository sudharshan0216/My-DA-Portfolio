import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function DownloadProjectButton() {
  const handleDownload = async () => {
    try {
      toast({
        title: "Preparing Download",
        description: "Creating ZIP file of the project source code...",
      });

      const response = await fetch('/api/download-project');
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sudharshan-portfolio.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: "The project source code is being downloaded.",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the project.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      data-testid="button-download-project"
    >
      <Download className="h-4 w-4 mr-2" />
      Download Source Code
    </Button>
  );
}
