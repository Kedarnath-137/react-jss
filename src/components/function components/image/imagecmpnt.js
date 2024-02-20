const ImageComponent = ({image ="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",width,height}) => {
  return (
    <img
      src={image}
      width={width}
      height={height}
    ></img>
    
  );
};

export default ImageComponent;
