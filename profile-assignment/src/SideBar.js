function SideBar() {
   return (
    <aside className="w-1/4 bg-gray-300 p-4">
      <ul className="flex justify-center flex-col gap-2 mt-4 text-center">
        <li className="hover:text-green-900 hover:bg-yellow-500 text-yellow-500 bg-green-900 rounded-full p-2 cursor-pointer">Home</li>
        <li className="hover:text-green-900 hover:bg-yellow-500 text-yellow-500 bg-green-900 rounded-full p-2 cursor-pointer">About</li>
        <li className="hover:text-green-900 hover:bg-yellow-500 text-yellow-500 bg-green-900 rounded-full p-2 cursor-pointer">Contact</li>
      </ul>
    </aside>
  );
}
export default SideBar;
