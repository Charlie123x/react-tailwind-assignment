import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-900 text-white p-4 text-center flex items-center justify-center gap-2">
      <p className='text-yellow-500'>© Charlie T. Gadapan</p>
      <div>
        <a href="https://www.facebook.com/charlieeeeess">
            <FaFacebook className="inline text-yellow-500" />
        </a>
    
      </div>
    </footer>
  );
}
export default Footer;
