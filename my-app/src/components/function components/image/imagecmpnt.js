const ImageComponent = ({image,width,height}) => {
  return (
    <img
      src={image}
      width={width}
      height={height}
    ></img>
    
  );
};

export default ImageComponent;
