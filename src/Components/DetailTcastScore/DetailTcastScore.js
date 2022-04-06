import './DetailTcastScore.css';

function DetailTcastScore(props) {

    // check round open
    let roundOpenList = [];
    for (let index = 0; index < props.roundSeatsOpen.length; index++) {
        if (props.roundSeatsOpen[index] !== -1) {
            roundOpenList.push ( <li className='circle-open'>{index+1}</li>);
        }
        else {
            roundOpenList.push ( <li className='circle-close'>{index+1}</li>);
        }
    };

    return (
        <div className='detail-tcast'>
            {/* 2.1 open round */}
            <div className='round-open'>
                <p className='round-open-text'>รอบที่เปิด</p>

                <ul className='round-open-item'>
                    {roundOpenList}
                </ul>

            </div>

            {/* 2.2 current round - edit score */}
            <div className='current-round'>
                <p className='current-round-text'>รอบที่ 4 : Admission</p>
                <div className='current-round-edit-score'>
                    <p>แก้ไขคะแนน</p>
                    <img src="img/group-3-copy-4.svg" />
                </div>

            </div>


            {/* 2.3 user score */}
            <div className='user-score'>
                <img src="img/page-1-copy-2.svg" />
                <div className='user-score-detail'>
                    <p className='user-score-detail-text'>คะแนนของคุณคือ</p>
                    <p className='user-score-detail-value'>23,453</p>
                </div>
            </div>


            {/* 2.4 history score */}
            <div className='history-score'>
                <div className='sub-history-score'>
                    <p className='history-score-value'>{props.score.min}</p>
                    <p>คะแนนต่ำสุด {props.score.year}</p>
                </div>
                <div className="vertical-line"></div>
                <div className='sub-history-score'>
                    <p className='history-score-value'>{props.score.avg}</p>
                    <p>คะแนนเฉลี่ย {props.score.year}</p>
                </div>
                <div className="vertical-line"></div>
                <div className='sub-history-score'>
                    <p className='history-score-value'>{props.score.max}</p>
                    <p>คะแนนสูงสุด {props.score.year}</p>
                </div>

            </div>

        </div>
    );
}

export default DetailTcastScore;