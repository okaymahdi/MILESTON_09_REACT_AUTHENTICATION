/** import logo */
import logo from '../../../assets/logo.png'

/** moment import for date time */
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <a href="#">
                <img className='mx-auto' src={logo} alt="" />
            </a>
            <p className="text-lg">Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;