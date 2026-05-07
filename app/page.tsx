import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">

  {/* Background Image */}
  <div className="fixed inset-0 -z-10">
    <img
      src="/home-bg.png"
      alt="background"
      className="w-full h-full object-cover object-[50%_50%] opacity-80"
    />
  </div>

  <div className="absolute inset-0 -z-10 bg-black/60"></div>

      {/* NAVBAR */}
<nav className="flex justify-between items-center px-8 py-2 border-b border-white/10 backdrop-blur-md bg-white/5">
        <img
  src="/logo.png"
  alt="Logo of U.S Art Gallery"
  className="h-10 w-auto"
/>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="/gallery" className="hover:text-white transition">Gallery</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <h1 className="text-7xl md:text-8xl font-semibold leading-none mb-6 tracking-wide">
  U.S Art Gallery
  
  <span className="block text-2xl md:text-3xl font-normal tracking-[0.18em] leading-none mt-2">
    Upasana Sarma Art Gallery
  </span>
</h1>
        <p className="text-white-80 max-w-xl mb-10 text-lg">
          A Global Stage for Artists to Express, Connect and Learn. 
        </p>

        <div className="flex gap-4">
  <Link
    href="/about"
    className="bg-transparent border border-white text-white px-6 py-2.5 rounded-full hover:scale-105 transition duration-300"
  >
    Know More
  </Link>

  <Link
    href="/contact"
    className="bg-transparent border border-white text-white px-6 py-2.5 rounded-full hover:scale-105 transition duration-300"
  >
    Contact
  </Link>
</div>
      </section>


      {/* GALLERY */}
      {/* GALLERY */}
<section className="px-8 py-20">

  <h2 className="text-3xl font-semibold mb-12 text-center tracking-wide">
    Highlights
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">

    {[
  {
    src: "/art/1.jpeg",
    title: "Upasana Sarma with Dr. Himanta Biswa Sarma, Chief Minister of Assam.",
  },
  {
    src: "/art/2.jpeg",
    title: "Upasana Sarma with Dr. Manoj Panda, Full-time Member of the Sixteenth Finance Commission & Former Director of the Institute of Economic Growth, Delhi and the Centre for Economic and Social Studies (CESS), Hyderabad, at her Office.",
  },
  {
    src: "/art/3.jpeg",
    title: "Upasana Sarma with Varnali Deka, IAS, Director, Ministry of Tribal Affairs, Government of India.",
  },
  {
    src: "/art/4.jpeg",
    title: "Upasana Sarma with Shri Rahul Chandra Das , ACS, Director, Directorate of Cultural Affairs, Assam.",
  },
].map((item, index) => (
      <div
  key={index}
  className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center group cursor-pointer"
>

  {/* IMAGE */}
  <img
    src={item.src}
    alt="Upasana Sarma with different Government Officers and Dignitaries"
    className="w-full h-full object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* TEXT */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-center px-4">
    <div>
      <h3 className="text-xl font-semibold">
  {item.title}
</h3>
    
    </div>
  </div>

</div>
    ))}

  </div>

  {/* CORE MEMBERS */}

<section className="px-8 py-24">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-semibold tracking-wide">
      Core Members
    </h2>

    <p className="text-gray-500 mt-4">
      Individuals associated with the journey of U.S Art Gallery over the years.
    </p>
  </div>

  <div className="max-w-3xl mx-auto space-y-4 text-center">

    <div className="py-4 border-b border-white/10 text-lg">
      Jaspreet Mohan Singh
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr.(Hon.) Haripriya Narasimhan 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Subrata Chatterjee
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Jyothisha
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Hiralal Gohil
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr.Kukil Sharma
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Ishani Sinha
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Subha Sivakumar
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr. Juni Menon 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Mamta Arora 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Minal Prashant Patil 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Puspanjali Panda
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Ashish Kar
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Booragadda Anuradha 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Sarrvajeet Krishnaprasad
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Sambedana Das Mohapatra
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Bhavani Ravichandran
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Syed Intezar Mehdi
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      CA Rity Shah 
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr.Kanchan Kumari
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Vibhavari Desai
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr.Sarika Bharadwaj
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Anju Daga
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Arun Vijendran
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Leeba Luka
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Prasanthi AR
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Dr. Bhavana Maru
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Debanjana Ghatak
    </div>

    <div className="py-4 border-b border-white/10 text-lg">
      Devyani
    </div>

  </div>

</section>

</section>

<div className="flex justify-center mt-10">

  <a
    href="/"
    className="px-8 py-3 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 transition duration-300 text-sm tracking-wide"
  >
    Back to Home
  </a>

</div>


      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-10 border-t border-white/10">
        © 2026 U.S Art Gallery. All rights reserved.
      </footer>

    </main>
  );
}