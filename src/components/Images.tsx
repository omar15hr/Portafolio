interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className = "",
  maxWidth = "100%",
  maxHeight = "100%",
}) => {
  return (
    <div
      style={{ maxWidth, maxHeight }}
      className="flex items-center justify-start self-start"
    >
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain w-full h-full`}
      />
    </div>
  );
};
