export const ImageComponent: React.FC<{ image: string; alt: string }> = ({
  image,
  alt,
}) => (
  <div>
    <img src={image} alt={alt} />
  </div>
);
