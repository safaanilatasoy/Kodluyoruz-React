

function User({name, surname, isLoggedIn, friends}) {
  return (
    <>
      {/* if login success*/}
      <h3 className="loginSuccess">
        {isLoggedIn && `Hoşgeldiniz ${name} ${surname}`}
      </h3>

      {/* if login fail */}
      <h3 className="loginFail">{!isLoggedIn && `Giriş yapmadınız!`}</h3>



      {
       friends.map((friend, index) => (
        <div key={index}> 
        
        {index} - {friend}
        </div>
       ))
      }
    </>
  );
}

export default User;