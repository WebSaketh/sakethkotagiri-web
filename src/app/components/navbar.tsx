export default function Navbar() {
  return (
    <div className="fixed w-full">
      <nav className="flex row justify-between bg-black text-white p-2 font-montserrat tracking-widest text-lg">
        <div
          className="p-2 m-2 mx-6 whitespace-nowrap"
          style={{
            marginLeft: "20vh",
          }}
        >
          <a href="#home">SAKETH KOTAGIRI</a>
        </div>
        <div
          className="flex flex-row p-2 px-4 whitespace-nowrap"
          style={{
            paddingRight: "20vh",
          }}
        >
          <div className="p-2 whitespace-nowrap">
            <a href="#about">ABOUT</a>
          </div>
          <div className="p-2 whitespace-nowrap">
            <a href="#resume">RESUME</a>
          </div>
          <div className="p-2 whitespace-nowrap">
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
