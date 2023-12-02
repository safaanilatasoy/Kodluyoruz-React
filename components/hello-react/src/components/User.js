import PropTypes from "prop-types";

function User({name, surname, isLoggedIn, friends,age,address}) {

  {/* if login fail */}
  if(!isLoggedIn) {
    return <h3 className="loginFail">Giriş Yapmadınız.</h3>
  }
  return (
    <>
      {/* if login success*/}
      <h3 className="loginSuccess">{`Hoşgeldiniz ${name} ${surname} ${age}`}</h3>

      {address.title} {address.zip}

      {friends &&
       friends.map((friend, index) => (
        <div key={index}> 
        
        {index} - {friend}
        </div>
       ))
      }
    </>
  );
}

// isRequired ---> değerin gönderilmesini zorunlu kılar
// oneOfType ---> Bir property'de birden fazla veri tipinin gönderilebilmesini sağlar
// Obje olarak gönderdiğimiz propertylerde kullanılır

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,

  //* oneOfType Kullanımı
  age: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]).isRequired,
  friends: PropTypes.array,

  //* Shape Kullanımı
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  })
}

//* Default Props
// Eğer prop gönderilmemişse default props'dan karşılığı alınır.

User.defaultProps = {
  isLoggedIn: false,
  name: "No-name"

}

export default User;