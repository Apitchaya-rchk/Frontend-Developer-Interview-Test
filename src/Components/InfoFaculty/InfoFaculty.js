import './InfoFaculty.css';

function InfoFaculty(props) {

    return (
        <div className='info'>
            <img src={props.logo} className='field-icon' />
            <div className='info-detail'>
                <div className='info-detail-text'>
                    <p className='info-detail-text-faculty'>{props.faculty.name}</p>
                    <p className='info-detail-text-field'>{props.field}</p>
                    <p className='info-detail-text-uni'>{props.faculty.university.name}</p>
                </div>
                <img src="img/page-1.svg" />

            </div>
        </div>

    );
}

export default InfoFaculty;
