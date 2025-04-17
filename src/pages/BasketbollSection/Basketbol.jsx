import { useState } from 'react';
import './Basketbol.css';

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ image, title, background }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isRounded, setIsRounded] = useState(false); // <- Новый стейт

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsRounded(true);
        }, 100);
    };

    return (
        <div
            className={`card ${isRounded ? 'card-rounded-to-ball' : ''} flex`}
            style={{ backgroundImage: `url(${background})`, display: 'flex'}}
        >
            <img
                src={image}
                alt="icon"
                className={`card-icon ${isClicked ? 'rotating moving' : ''}`}
                style={{ marginLeft: '-40px' }}
            />
            <h2 className="card-title">{title}</h2>
            <button className="card-button" onClick={handleClick}>Открыть</button>
        </div>
    );
};


const Basketbol = () => {
    return (
        <div className="basketbol-section">
            <div className="basketball-app">
                <h3 className="section-title">• Баскетбол</h3>
                <CategoryCard
                    image="https://s3-alpha-sig.figma.com/img/f94a/f97f/df7680a016c1ccb71e7b5c8c4d03b036?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i6JLR6j6EadNBp2UyLXeyECb3sccoxXN4zKPkZKJqdizM-DOLoi1iH5Rn6orcJw~QoXb66ZaOvlYfnDwWZK~PkyHdLCc0vm6exxC99zNyZrKQ0Cz1PjMYxtopLQ28RO5~G6tlb1s98Q2lu4c-u2LTHqfFMZ-us7xNFxPW0efc~Y7sBzRzSAiDAEL~vlNxwjhRmgTRoLEM078J0REopLLQz-vWFfOBJMrjt470R~nV9I6kHLHr2y8wfR0pYQQAUG257C4YZUZkFjYtjXUc8zoxyg~Hypdw4veiJ1rpDjVegK7C3jqV759oMKGuqCNHAMVe0YdFVKDkyUXIx9ys0x-Gg__"
                    title="Залы"
                    background="https://s3-alpha-sig.figma.com/img/6ec9/d36d/fe8a7b95b9ad618691b7ea081bf3cd20?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a4I9N-6eyW11O9UMD6aJHI-HqsAVI8OIWv~MKaMuI3UPBaJaE1-RqSJG~qddxZ4fNY~NceYCEcA96EVx9u7cmzzrIQIJIAQSBli2fEYG08~tmiGiiMKceqEp0uNYuyySx6DoMcl6AC~c0JGMYMLKxC~NFdCPsLuYa8TyngrTl17uDb~GFyPPF5uRVKu4TyqW50LRQrW3iOq4R0HilHRlIeZAbnv9ePtedYBbolr7cpywAm8TjEJabHIIntWx9vdiQoeKzxhhFQmudaBXbzgMDUefcTGhUfpCgCeyGVUHDKbAtkG8v-aDpJV2wvtCjrAxDYGoYaPM-axHgwD5sWrbXw__"
                />
                <CategoryCard
                    image="https://s3-alpha-sig.figma.com/img/f94a/f97f/df7680a016c1ccb71e7b5c8c4d03b036?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i6JLR6j6EadNBp2UyLXeyECb3sccoxXN4zKPkZKJqdizM-DOLoi1iH5Rn6orcJw~QoXb66ZaOvlYfnDwWZK~PkyHdLCc0vm6exxC99zNyZrKQ0Cz1PjMYxtopLQ28RO5~G6tlb1s98Q2lu4c-u2LTHqfFMZ-us7xNFxPW0efc~Y7sBzRzSAiDAEL~vlNxwjhRmgTRoLEM078J0REopLLQz-vWFfOBJMrjt470R~nV9I6kHLHr2y8wfR0pYQQAUG257C4YZUZkFjYtjXUc8zoxyg~Hypdw4veiJ1rpDjVegK7C3jqV759oMKGuqCNHAMVe0YdFVKDkyUXIx9ys0x-Gg__"
                    title="Кружки"
                    background="https://s3-alpha-sig.figma.com/img/21a4/22ad/0858ab26db307216a032be9567154a00?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=smeo9Yz~cIiPGjXkT7dR~wAYzsEbGNaYQglf907-A5tfC8zJjnp5hr~9ph0RsCioBCXxNgH3aJswo3UgRuAYHUVxasoKnJwaMloUnJf-5ckx1WQVHBEi4n~YinEpg~lps7XdJ2AaMItl2pDX0J32Gh4xwJ8vtgxVD-OQ15~qokbYyTgSPxAIfEH35p0bVzMPuJJ4uPUsM9eLC7UBXZI8snkYEotSu93Y3vauWUZUa3j7QHPe4Q6tr5f0hqFEWuoj83TbyoIsygFE4XZ9dYsPnFqjYrZM2rba9Hbz-77QzIfdQx7cZFkOYEUjv48AiSGk8~DdvUIu1NnaULSBRFkdNA__"
                />
            </div>
        </div>
    );
};

export default Basketbol;
