import React from 'react';
import Card from '../components/card';
import data from '../datas/logement.json'
const Home = () => {
    return (
        <div className="gallery">
            {data.map((logement) =>(
                <Card key={logement.id} logement = {logement}/>
            ) )}
        </div>
    );
};

export default Home;