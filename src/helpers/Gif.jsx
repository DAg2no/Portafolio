const Gif = (props) => {
    const { src, alt } = props;
  
    return (
      <img
        src={src}
        alt={alt}
        width={100}
        height={100}
        loop
      />
    );
  };
  
  export default Gif;