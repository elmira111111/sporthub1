import { useState } from "react";
import Icon from "../../assets/images/entypo_controller-play.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import Hub from "../../assets/images/Home.svg";
// import '@fontsource/comfortaa'; 
 
const Header = () => {
  const [lang, setLang] = useState("Рус");
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="header">
      <img src={Hub} alt="" />
      <div style={{ marginTop: "6px" }}>
        <Link style={{ color: "red", borderBottom: '1px solid red' }} to="/">
          Главная
        </Link>
        <Link style={{ marginLeft: "27px" }} to="/basketbol">
          Спорт
        </Link>
        <Link style={{ marginLeft: "30px" }} to="/reklama">
          Рекламы
        </Link>
      </div>

      <Link
        style={{
          paddingTop: '5px',
          textAlign:'center',
          border: 'none',
          fontSize: '20px',
          marginLeft: "34px",
          marginRight: "30px",
          width: "277px",
          height: "40px",
          borderRadius: "8px",
          backgroundColor: "#FE0404",
        }}
        to="/reklama"
      >
        Разместить рекламу
      </Link>

      <div className="translation">
        <button
          style={{
            backgroundColor: "#18171A",
            fontSize: '20px',
            color: 'white ',
            borderColor: "#FFFCFC",
            width: '124px ',
            height: '40px',
            borderRadius: '8px'
           
          }}
          onClick={toggleMenu}
        >
          {lang} ▼
        </button>

        {showMenu && (
          <div>
            {["Рус", "Кыр", "Eng"].map(
              (l) =>
                l !== lang && (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setShowMenu(false);
                    }}
                  >
                    {l}
                  </button>
                )
            )}
          </div>
        )}
      </div>

      <Link to='/register' className="registration">Регистрация</Link>

      <img
        style={{ marginTop: "", width: "40.30226516723633px" }}
        src={Icon}
        alt=""
      />
    </div>
  );
};

export default Header;
