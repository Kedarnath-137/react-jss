const Profile = () => {
  const profileInformation = {
    name: 'kedar',
    address: 'gadwal',
    url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    dimension : 100,
  };

  const imageArray = ["https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"]
  const { name, address, url,dimension } = profileInformation;

  return (
    <div>
      <h2>{profileInformation.name}</h2>
      <h2>{address}</h2>
      <img src={profileInformation.url} width={100} height={150}></img>

      {
        imageArray.map((eachitem) => {
          return (
              <div>
                <img src = {eachitem} width = {dimension} height = {dimension}></img>

              </div>
          )
        })


      }

      {/* ternary operator */}
      {
      [{ url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' }]
        .length > 0 ? (
        <img src={url} width={100} height={100}></img>
      ) : (
        <h3>no product found</h3>
      )
      }

      {/* short circuit hand */}

      {
        [{ url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' }]
          .length > 0 && <img src={url} width={100} height={100}></img>
      }


    </div>
  );
};
export default Profile;

// const{name, address} = profileInformation => destructing....
// ternay :
// condtion ? true: false;

// condition rendering --> using ternary operator we can render the ui.
// 1.using ternary operator if & else
//2.short circuit operator.
