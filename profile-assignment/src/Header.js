import User from '../src/user.jpg';

function Header() {
  return (
    <header className="bg-green-900 text-yellow-500 p-4 items-center gap-8 flex justify-evenly">
        <img src={User} alt="user.png" className="w-16 h-16 border-2 rounded-full mx-auto mb-2 border-yellow-500" />
        <p className="text-sm font-bold">Prk 1, Curbada Mandulog Iligan City</p>
        <p className="text-sm font-bold">charliegadapan.20231438@gmail.com</p>
    </header>
  );
}
export default Header;
