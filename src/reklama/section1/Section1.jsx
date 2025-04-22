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
              src="https://s3-alpha-sig.figma.com/img/bdeb/9b24/154ae62e5892b99f0f4bcb110f422c30?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OC2HfMqm3UJL2XOMCcG1JoxJWi48mvQ0gos3Bsl7263RiZ5H9Q~l~eY-yooR0~F7FJNFX0S8p7gBZXxPW3KAVpSFB7N9IjYjjjmWHKJWgurIqAg44ef6hUDPcRNj6ldVm5B9ryK9liRUQjC~hmMQljm-D1tUlRDFUf9iRwThpRPGg7GkvkUmJ3si8SAte2LeKi1tNy0gQonReibpTJmQMAURyZ8IB1XhzlDEgH1Bm23x~0xNuYa77O~kD4fGePioCej9E~SWMoxXJe4K9NfEih0JUQnmGu1mGwGaz0Y~~VVhyaHmI7cjYF3y0dvjhQNHfXIXuarAEi~5eVjxefVJHA__"
              alt="stadium"
              className="background-image"
          />

          <img
              src="https://s3-alpha-sig.figma.com/img/60f6/b335/284676e1b36f5f0bc8bdc991beedcd5c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRcJrhKPvKYn7IzmX7Uk2x2wiZFv7zTHETswYBmohLZ~T1ubXe05TA5jJGM9NhMA0yJD4ccNh57OflvUwI4fx4cW19f78S5TqKssaMl9nqqkx7u-LikcLsyCYUH2LNfLQihDAm~8OChBHpUOFFVH1Moy-QMWGseGXJ~ioh1zjekP084Of1bFPtX56PVDRVe8fyv-fs~o-5yh86GqCYcyIM9BHcTv~q-PQq14u8Ng2xNt8N-Q~JuawEGefvi7AkGJUSTPoMNI~gWGQQW87l1Y0SUkXxKfk8r3IzVmm3Q3DreZvenDy6NmBelrzPLdWjNAdy9tQjILdRmdQ~Uf70JBRA__"
              alt="overlaid"
              className="overlay-image"
          />
          <img
              src="https://s3-alpha-sig.figma.com/img/60f6/b335/284676e1b36f5f0bc8bdc991beedcd5c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JRcJrhKPvKYn7IzmX7Uk2x2wiZFv7zTHETswYBmohLZ~T1ubXe05TA5jJGM9NhMA0yJD4ccNh57OflvUwI4fx4cW19f78S5TqKssaMl9nqqkx7u-LikcLsyCYUH2LNfLQihDAm~8OChBHpUOFFVH1Moy-QMWGseGXJ~ioh1zjekP084Of1bFPtX56PVDRVe8fyv-fs~o-5yh86GqCYcyIM9BHcTv~q-PQq14u8Ng2xNt8N-Q~JuawEGefvi7AkGJUSTPoMNI~gWGQQW87l1Y0SUkXxKfk8r3IzVmm3Q3DreZvenDy6NmBelrzPLdWjNAdy9tQjILdRmdQ~Uf70JBRA__"
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
              <SlidersHorizontal size={24} color="white"/>
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
          <h1 className={'vsereclamy'}>Все рекламы</h1>
      </div>
  );
};

export default Section1;
