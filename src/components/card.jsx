import { Link } from 'react-router-dom';
import '../assets/css/card.css'

function Card({logement}){
    return(
                <Link to={`/logement/${logement.id}`}>
                    <div className="logementCard">
                        <img src={logement.cover} alt=""/>
                        <p className="cardTitle">{logement.title}</p>
                    </div>
                </Link>
    );
};

export default Card;