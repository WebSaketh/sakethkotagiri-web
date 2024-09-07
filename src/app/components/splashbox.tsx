export default function Splashbox() {
  return (
    <div
      className="flex h-screen font-montserrat"
      style={{
        paddingLeft: "20vh",
        paddingRight: "20vh",
      }}
    >
      <div className="flex flex-row w-full justify-between">
        <div
          className="flex flex-col"
          style={{
            paddingTop: "30vh",
            paddingBottom: "30vh",
          }}
        >
          <h1 className="text-3xl font-bold">hey there i'm</h1>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-sky-400 via-teal-500 to-green-500 bg-clip-text text-transparent">
            SAKETH
          </h1>
          <h1 className="text-base font-bold max-w-2xl">
            I'm a computer science gradaute and developer based in New York.
            Here you can find my various projects and social media accounts.
            Feel free to contact me or just explore my portfolio!
          </h1>
          <div className="flex flex-row mt-16">
            <a
              href="https://www.linkedin.com/in/saketh-kotagiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex bg-gradient-to-r from-blue-600 to-sky-400 max-w-xs py-4 px-4 mr-4 rounded-lg items-center ">
                <img className="w-24 h-auto" src="/content/linkedin.svg"></img>
              </div>
            </a>
            <a
              href="https://github.com/websaketh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex bg-gradient-to-r from-violet-800 to-indigo-500 max-w-xs py-2 px-4 rounded-lg items-center">
                <img className="w-24 h-auto" src="/content/github.png"></img>
              </div>
            </a>
          </div>
        </div>
        <div className="h-full ml-24 py-24 flex grow justify-center align-middle overflow-visible items-center">
          <img
            className="object-cover overflow-visible "
            src="content/bg-flower-modified.png"
            style={{ zIndex: -1 }}
          ></img>
        </div>
      </div>
    </div>
  );
}
