import './reclamaCards.css';
import local from '../../assets/images/localIcon.svg'
import instagram from '../../assets/images/instagram.svg'
import phoneIcon from '../../assets/images/phone.svg'

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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
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
            image: 'https://s3-alpha-sig.figma.com/img/04f8/7885/33cfe88c6aeff5201578e141512f3684?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HCKwb9zOKhNZ3LnlG244twQFBn-y9TEOQITi4ROdMjxuSkgsRdoaFNWb7RhcfEzAtuk~zGiLkdtVwRwj6x-wrhh5m3UxAeQRtTf2obG7ubnATjjbWEyqGMiO93VJYfUf94s2v5V0wOZSJrTSaiu4kUU-KK4-i8Zvm2zf~PtFEJ3PYfKNxFWumaiq1haz1BslrO80Uk~cnx4jtJNYqrtUzEXLcB7Fl1awq3w-DBz8lQZeKvTXIQnEy7BVFcF63Z7hD4EgL2lhToL5U37L1Tt7KJf6O3f9d8JoQnYbfpEFesPDLbd6Nxp8s0DxIJQ15eNGKQNRweH0Zz8FPT9TmOOd0g__'
        }
    ];

    return (
        <div className="reclama-wrapper">
            {cards.map(card => (
                <div
                    key={card.id}
                    className="reclama-banner"
                    style={{backgroundImage: `url(${card.image})`}}
                >
                    <div className="reclama-phone">
                        <img src={phoneIcon} alt=""/>
                        {card.phone}</div>

                    <h1 className="reclama-title">
                        <span>{card.titleTop}</span><br/>
                        {card.titleBottom}
                    </h1>

                    <button className="reclama-button">{card.buttonText}</button>

                    <ul className="reclama-list">
                        {card.features.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>

                    <div className="reclama-address">
                        <img src={local} alt=""/>
                        <p>{card.address}</p>
                    </div>
                    <div className="reclama-address">
                        <img src={instagram} alt=""/>
                        <p>{card.social}</p>
                    </div>
                    <div className="reclama-line"/>
                </div>
            ))}
        </div>
    );
};

export default ReclamaCards;
