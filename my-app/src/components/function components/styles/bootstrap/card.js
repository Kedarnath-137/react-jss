import ImageComponent from '../../image/imagecmpnt';

const Card = () => {
  return (
    <div className="card" style={{ width: 400 }}>
      {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
      <ImageComponent></ImageComponent>
      <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Some example text.</p>
        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
