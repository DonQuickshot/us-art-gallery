export default function About() {
  return (
    <main className="min-h-screen text-white px-6 py-20 relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/about-bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold mb-16 tracking-wide">
          About U.S Art Gallery
        </h1>

        {/* FOUNDER IMAGE & TITLE */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            <img
              src="/founder.jpeg"
              className="w-full h-full object-cover"
              alt="Upasana Sarma, the Founder & CEO of U.S Art Gallery"
            />
          </div>
          <h2 className="mt-6 text-xl font-medium tracking-wide">
            Founder & CEO
          </h2>
        </div>

        {/* FOUNDER TEXT */}
        <p className="text-gray-300 leading-relaxed mb-20 max-w-2xl mx-auto">
          Upasana Sarma, born on 14 December 1999, is a dynamic and multitasking personality known for her contributions across diverse fields. She is a state-level Chess player, a writer with her published book "Colours of Nation", an entrepreneur, influencer, and social activist.
Coming from an engineering background, she founded U.S. Art Gallery in 2021, which has grown into a global platform for artists with participation from 17 countries. Under her leadership, the organization has earned numerous awards and recognitions.
Upasana Sarma herself is a recipient of several prestigious awards and honors, and she is also a multiple world record holder, reflecting her dedication, vision, and impactful presence across fields.
        </p>

        {/* LOGO SECTION */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 bg-transparent flex items-center justify-center">
            <img
              src="/logo.png"
              className="w-full h-full object-cover"
              alt="Logo of the U.S Art Gallery"
            />
            </div>
          <h2 className="mt-6 text-xl font-medium tracking-wide">
            The Origin
          </h2>
        </div>

        {/* ORIGIN TEXT */}
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          U.S Art Gallery (Upasana Sarma Art Gallery) was founded in 2021 by Upasana Sarma as a digital platform dedicated to promoting art and supporting artists across different creative fields. The organization has successfully conducted numerous online art exhibitions and offers a variety of art courses at affordable prices, creating opportunities for emerging and established artists alike.
Within a short span of time, U.S Art Gallery gained recognition for its contribution to the art community. Artists from 17 countries participated in its online exhibitions, helping the platform grow into an international creative network. 
        </p>
      </div>

{/* AWARDS & EVENTS */}

<section className="px-8 py-24">

  <div className="text-center mt-15 mb-12">
    <h2 className="text-4xl font-semibold tracking-wide">
      Accolades
    </h2>
  </div>

  <div className="max-w-4xl mx-auto space-y-6">

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-xl font-medium">
        Start Up of the Year 2023
      </h3>

      <p className="text-gray-400 mt-2 leading-relaxed">
        Presented at the Influencer Awards 2023 by LuxuryDot PR, Delhi, among 8,000 nominations.
      </p>
    </div>

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-xl font-medium">
        Most Innovative Company of the Year 2024
      </h3>

      <p className="text-gray-400 mt-2 leading-relaxed">
        Honored at the Innovative Company Awards 2024 organized by community platform C Connects, Hyderabad.
      </p>
    </div>

    <div className="text-center mt-35 mb-12">
    <h2 className="text-4xl font-semibold tracking-wide">
      Award Shows and Exhibitions organised by U.S Art Gallery
    </h2>
  </div>

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-xl font-medium">
        The National Smashing Talent Awards 2024
      </h3>
    </div>

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-xl font-medium">
        Nexus Excellence Award 2025
      </h3>
    </div>

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-xl font-medium">
        The Great Indian Talent Awards & Exhibitions 2026
      </h3>
    </div>

  </div>

</section>

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
