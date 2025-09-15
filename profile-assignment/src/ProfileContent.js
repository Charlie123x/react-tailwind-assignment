function ProfileContent() {
  return (
    <main className="flex-1 p-4">
        <section id="home">
            <h2 className="text-xl font-bold">Charlie Gadapan,</h2>
            <p>BSIT Student from St.Peters College</p>
        </section>
        <section id="about">
            <h2 className="text-lg font-bold mt-10 text-center">About Me</h2>
            <div className="text-center mt-5 bg-green-900 w-[50%] m-auto border p-4 rounded-lg shadow-md">
                <h2 className="font-bold mb-5 text-yellow-500">Skills</h2>
                <ul className="list-none">
                    <li className="hover:text-yellow text-yellow-500 p-1">Playing Mobile Games</li>
                    <li className="hover:text-yellow text-yellow-500 p-1">Coding</li>
                    <li className="hover:text-yellow text-yellow-500 p-1">Listening to Music</li>
                </ul>
            </div>
        </section>
    </main>
  );
}
export default ProfileContent;
