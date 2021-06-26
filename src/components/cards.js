import Card from './card'
import ShowsData from './data.json'
import '../css/cards.css'
const Cards = () => {
    return (
        <>
            <div className="cards">
                {
                    ShowsData.shows.map((show) => {
                        return <Card img_src={show.img_src} key={show.sno} title={show.title} show_link={show.show_link} category={show.category} />
                    })
                }
            </div>
        </>
    );
}
export default Cards;