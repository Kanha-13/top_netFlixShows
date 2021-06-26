import '../css/card.css'
const Card = ({ img_src, title, show_link, category }) => {
    return (
        <>
            <div className="card">
                <img alt="TEASER" src={img_src} className="card_img" />
                <div className="card_info">
                    <span className={category}>A Netflix Original series</span>
                    <h3 className="card_title">{title}</h3>
                    <a href={show_link}>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Card;