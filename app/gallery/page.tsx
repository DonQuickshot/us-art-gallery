export default function Gallery() {

  const artworks = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",

  ];

  return (
    <main className="min-h-screen text-white py-20 px-6">

        {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/gallery-bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-78"
        />
      </div>

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-semibold tracking-wide">
          Gallery
        </h1>

        <p className="text-gray-500 mt-4">
          A curated visual archive by U.S Art Gallery
        </p>
      </div>

      {/* VERTICAL IMAGE FLOW */}
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">

        {artworks.map((src, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/5"
          >

            <img
              src={src}
              alt="Photos the Gallery of the U.S Art Gallery of Upasana Sarma"
              className="w-full h-auto object-contain transition duration-500 hover:scale-[1.02]"
            />

          </div>
        ))}

      </div>

      {/* BACK TO HOME BUTTON */}
<div className="flex justify-center mt-24">

  <a
    href="/"
    className="px-8 py-3 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition duration-300 text-sm tracking-wide"
  >
    Back to Home
  </a>

</div>


    </main>
  );
}