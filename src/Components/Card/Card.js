import './Card.css';
import InfoFaculty from '../InfoFaculty/InfoFaculty';
import DetailTcastScore from '../DetailTcastScore/DetailTcastScore';
import ScorePortion from '../ScorePortion/ScorePortion';
import Share from '../Share/Share';
import { useState, useEffect } from 'react';


const test1 = {
    "id": "6998",

    "name": "สาขาวิชาเภสัชกรรมอุตสาหการ",

    "logo": "https://tcas-assets.skooldio.com/icons/edugroup/med.png",
    "roundSeats": [
        5,
        6,
        80,
        10,
        6
    ],

    "score": {
        "id": "18844",
        "year": 2562,
        "scoreType": "ADMISSION",
        "min": 20663.1,
        "max": 22307.3,
        "avg": 0
    },


    "faculty": {
        "id": "1465",
        "name": "คณะเภสัชศาสตร์",
        "tagId": "2",
        "university": {
            "id": "313",
            "name": "จุฬาลงกรณ์มหาวิทยาลัย"
        }
    },


    "updatedAt": "2019-03-13T07:00:46.000Z",
    "likes": 3014
}



function Card(props) {
    let isLoading = false;
    const [pickFaculties, setPickFaculties] = useState([]);

    useEffect(() => {
        fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
            .then(res => res.json())
            .then(data => setPickFaculties(data))
            .then(isLoading = true)
            .catch(err => console.log(err))

    }, [])

   
    return (
        <div>
            <div className="Cards">

                {/*Section 1: Info Field and University */}
                <InfoFaculty faculty={test1.faculty} field={test1.name} logo={test1.logo} />
                <div className="line"></div>

                {/*Section 2: Detail about TCAST */}

                <DetailTcastScore roundSeatsOpen={test1.roundSeats} score={test1.score} />
                <div className="line"></div>


                {/*Section 3: Score-portion */}
                <ScorePortion />
                <div className="line"></div>

                {/*Section 4: Share */}
                <Share likes={test1.likes} />

            </div>

      

        </div>
    );
}

export default Card;
