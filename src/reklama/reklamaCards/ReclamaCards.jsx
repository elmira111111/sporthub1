import './reclamaCards.css';

const ReclamaCards = () => {
    const cards = [
        {
            id: 1,
            titleTop: 'БЕРЕМ НАГРУЗКУ',
            titleBottom: 'НА СЕБЯ',
            phone: '+996 700-72-77-45',
            buttonText: 'Рассрочка 6/9/12 месяцев',
            features: ['Тренажёрный зал', 'Тренажёрный зал', 'Тренажёрный зал'],
            address: 'г. Бишкек, м. Горького, д. 84',
            social: 'Мы в Instagram',
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZPXdw-EsNUReP0JBN~TwzcGqOnGcVf4vNAaF9yexFOEDLInUehDj-T9spYYzvT9erDtCx~1RD2CCa4wr66MqpfLGlY0rpNtjFB0-b2veKY~lQroMGTeJJ9--cM1ttGpqL0C0aIGOAnclwPFpebdUS3JuVO6BwoXG~02Nh6go1yY~kPCdY6LKJknkOEZKN5adWgWvHVopYp6U4SzVO~8-FnG6ycRfxyOqWLTwUaGJPYqUdykcstYwbbWJ0VPCeuDrc-mNxeCQetzJdMDVBb7hyW8QGg7AVCczce~Yoj9SvQEHfhr3SQFX~G92PC2mTo6iEwD5ExtvqDnlDZE6mLv42g__' // замени на актуальный путь
        },
        {
            id: 2,
            titleTop: 'ТРЕНИРУЕМСЯ',
            titleBottom: 'ПО-СЕРЬЁЗНОМУ',
            phone: '+996 500-11-22-33',
            buttonText: 'Рассрочка 3/6/9 месяцев',
            features: ['Фитнес-зона', 'Кардио-зона', 'Персональные тренировки'],
            address: 'г. Бишкек, ул. Спортивная, д. 10',
            social: 'Мы в TikTok',
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZPXdw-EsNUReP0JBN~TwzcGqOnGcVf4vNAaF9yexFOEDLInUehDj-T9spYYzvT9erDtCx~1RD2CCa4wr66MqpfLGlY0rpNtjFB0-b2veKY~lQroMGTeJJ9--cM1ttGpqL0C0aIGOAnclwPFpebdUS3JuVO6BwoXG~02Nh6go1yY~kPCdY6LKJknkOEZKN5adWgWvHVopYp6U4SzVO~8-FnG6ycRfxyOqWLTwUaGJPYqUdykcstYwbbWJ0VPCeuDrc-mNxeCQetzJdMDVBb7hyW8QGg7AVCczce~Yoj9SvQEHfhr3SQFX~G92PC2mTo6iEwD5ExtvqDnlDZE6mLv42g__'
        },
        {
            id: 2,
            titleTop: 'ТРЕНИРУЕМСЯ',
            titleBottom: 'ПО-СЕРЬЁЗНОМУ',
            phone: '+996 500-11-22-33',
            buttonText: 'Рассрочка 3/6/9 месяцев',
            features: ['Фитнес-зона', 'Кардио-зона', 'Персональные тренировки'],
            address: 'г. Бишкек, ул. Спортивная, д. 10',
            social: 'Мы в TikTok',
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZPXdw-EsNUReP0JBN~TwzcGqOnGcVf4vNAaF9yexFOEDLInUehDj-T9spYYzvT9erDtCx~1RD2CCa4wr66MqpfLGlY0rpNtjFB0-b2veKY~lQroMGTeJJ9--cM1ttGpqL0C0aIGOAnclwPFpebdUS3JuVO6BwoXG~02Nh6go1yY~kPCdY6LKJknkOEZKN5adWgWvHVopYp6U4SzVO~8-FnG6ycRfxyOqWLTwUaGJPYqUdykcstYwbbWJ0VPCeuDrc-mNxeCQetzJdMDVBb7hyW8QGg7AVCczce~Yoj9SvQEHfhr3SQFX~G92PC2mTo6iEwD5ExtvqDnlDZE6mLv42g__'
        },
        {
            id: 2,
            titleTop: 'ТРЕНИРУЕМСЯ',
            titleBottom: 'ПО-СЕРЬЁЗНОМУ',
            phone: '+996 500-11-22-33',
            buttonText: 'Рассрочка 3/6/9 месяцев',
            features: ['Фитнес-зона', 'Кардио-зона', 'Персональные тренировки'],
            address: 'г. Бишкек, ул. Спортивная, д. 10',
            social: 'Мы в TikTok',
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZPXdw-EsNUReP0JBN~TwzcGqOnGcVf4vNAaF9yexFOEDLInUehDj-T9spYYzvT9erDtCx~1RD2CCa4wr66MqpfLGlY0rpNtjFB0-b2veKY~lQroMGTeJJ9--cM1ttGpqL0C0aIGOAnclwPFpebdUS3JuVO6BwoXG~02Nh6go1yY~kPCdY6LKJknkOEZKN5adWgWvHVopYp6U4SzVO~8-FnG6ycRfxyOqWLTwUaGJPYqUdykcstYwbbWJ0VPCeuDrc-mNxeCQetzJdMDVBb7hyW8QGg7AVCczce~Yoj9SvQEHfhr3SQFX~G92PC2mTo6iEwD5ExtvqDnlDZE6mLv42g__'
        }
    ];

    return (
        <div className="reclama-wrapper">
            {cards.map(card => (
                <div
                    key={card.id}
                    className="reclama-banner"
                    style={{ backgroundImage: `url(${card.image})` }}
                >
                    <div className="reclama-phone">{card.phone}</div>

                    <h1 className="reclama-title">
                        <span>{card.titleTop}</span><br />
                        {card.titleBottom}
                    </h1>

                    <button className="reclama-button">{card.buttonText}</button>

                    <ul className="reclama-list">
                        {card.features.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <div className="reclama-address">
                        <p>{card.address}</p>
                        <p>{card.social}</p>
                    </div>

                    <div className="reclama-line" />
                </div>
            ))}
        </div>
    );
};

export default ReclamaCards;
