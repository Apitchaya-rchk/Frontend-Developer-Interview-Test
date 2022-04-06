import './Share.css';
import { BsPersonFill } from 'react-icons/bs';

function Share(props) {
    return (
        <div className='footer'>
            <div className='total-like'>
                <div className='person-icon' ><BsPersonFill /></div>
                <span className='total-like-number'>{props.likes}</span>
                <span className='total-like-text'>คนที่สนใจ</span>
            </div>
            <img src="img/group-2.svg" className='share-icon' />
        </div>

    );
}

export default Share;
