import { useState } from "react";
import "./Section1.css";
import { SlidersHorizontal } from "lucide-react";

const Section1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState("");

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  return (
    <div className="section1-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/bdeb/9b24/154ae62e5892b99f0f4bcb110f422c30?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tCLPv1et9cZkbn6JuAsqEU6PXGRgnLKGBPMn~xkXar1rTsmAM5vA0NgRhvUWIxIQl~qUEnM0H-Rltnqy9yEuMCtT26WbiXo4jabhnvYHOr43eHSH~eku2-eHsAJQXCSzpgX-qxvqjr~sXFt4PRHBfRHmPKQ0aDAjjtf0JMUkowIjfczaNAtAXJg3HZxsUeo27Qo2-WUQPwWzzrLD8K-sChq8Fc5VBNdlkz2CU7Fhyork4~CnARf5ypo8iUTMuAUbUv0-rP5fCm5yzD4XW9kaOtdE0tBJ4HGhTyAiP0XWOzzWhKiiynjsCa63iBhjEtZxTNVrGHJASIZTSm5KEHLM2w__"
        alt="stadium"
        className="background-image"
      />

      <img
        src="https://s3-alpha-sig.figma.com/img/60f6/b335/284676e1b36f5f0bc8bdc991beedcd5c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iKfflKJ3A4CpD4mWgOjJCeLQTKdtVByLtlq5Rfc8c~3zctyh2S-PzjktKuqjXnB8ALg3ZAZYUEay2RsVbqutHQEsjHlx2HS5vRRpCkKAyIoPS5YpgztCbx1uvzb3nUp9FGRxsrtZiPXFnL9EQU5Io1Iz~-Ui1WehWxCnd8ySo3OdosQfoLTbCy6yPWsrMWS3~QDhp9NH~NOQfMpjp89-7j9E72ax1SGu6nj8dJO32o04vuixyHEjtHphf-YYe6fDtwXcThm6-k6SgJxAOF4BH00vxwImcrR3aNJ08rdeo0zxXy9173Yeir2UGSXahDIokKPGx-aURKQ8ij01cEJ3qA__"
        alt="overlaid"
        className="overlay-image"
      />
      <img
        src="https://s3-alpha-sig.figma.com/img/60f6/b335/284676e1b36f5f0bc8bdc991beedcd5c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iKfflKJ3A4CpD4mWgOjJCeLQTKdtVByLtlq5Rfc8c~3zctyh2S-PzjktKuqjXnB8ALg3ZAZYUEay2RsVbqutHQEsjHlx2HS5vRRpCkKAyIoPS5YpgztCbx1uvzb3nUp9FGRxsrtZiPXFnL9EQU5Io1Iz~-Ui1WehWxCnd8ySo3OdosQfoLTbCy6yPWsrMWS3~QDhp9NH~NOQfMpjp89-7j9E72ax1SGu6nj8dJO32o04vuixyHEjtHphf-YYe6fDtwXcThm6-k6SgJxAOF4BH00vxwImcrR3aNJ08rdeo0zxXy9173Yeir2UGSXahDIokKPGx-aURKQ8ij01cEJ3qA__"
        alt="overlaid"
        className="overlay-image2"
      />

      <button
        className="settings-button"
        onClick={() => {
          console.log("Открываю модалку");
          setIsModalOpen(true);
        }}
      >
        <SlidersHorizontal size={24} color="white" />
      </button>

      <div className="section1-labels">
        <div
          className={`label ${activeLabel === "Зал" ? "active" : ""}`}
          onClick={() => handleLabelClick("Зал")}
        >
          Зал
        </div>
        <div
          className={`label ${activeLabel === "Кружки" ? "active" : ""}`}
          onClick={() => handleLabelClick("Кружки")}
        >
          Кружки
        </div>
        <div
          className={`label ${activeLabel === "Турниры" ? "active" : ""}`}
          onClick={() => handleLabelClick("Турниры")}
        >
          Турниры
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <p>Все</p>
            <p>Новые</p>
            <p>За последние 10 дней</p>
            <p>За 1 месяц</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
