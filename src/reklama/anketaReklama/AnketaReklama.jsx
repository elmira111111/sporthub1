import './anketaReklama.css'

const AnketaReklama = () => {
    return (
        <div className="ankete-cards">
            <div className="anketa-card">
                <div className="anketa-circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className="anketa-card-title">Анкета для рекламы</span>
                <button className="anketa-card-button">Открыть</button>
            </div>

            <div className="anketa-card">
                <div className="anketa-circles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className="anketa-card-title">Тарифы</span>
                <button className="anketa-card-button">Открыть</button>
            </div>
        </div>
    );
};

export default AnketaReklama;
