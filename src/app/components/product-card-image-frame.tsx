import { ImageWithFallback } from "./figma/ImageWithFallback";
import { cn } from "./ui/utils";

interface ProductCardImageFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductCardImageFrame({ src, alt, className }: ProductCardImageFrameProps) {
  return (
    <div className={cn("flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden", className)}>
      <div className="h-full w-full overflow-hidden">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}