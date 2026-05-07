export default function Contact() {
  return (
    <main className="min-h-screen text-white px-6 py-20 relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/contact-bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-78"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/50"></div>

      <div className="max-w-3xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-16 tracking-wide">
          Get in Touch
        </h1>

        {/* CONTACT CARDS */}
        <div className="space-y-8">

          {/* EMAIL */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-xl mb-2">Email</h2>
            <p className="text-gray-400">
              usartgallery2020@email.com
            </p>
          </div>

          {/* PHONE */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-xl mb-2">Phone</h2>
            <p className="text-gray-400">
              +91 81330 36919
            </p>
          </div>

          {/* SOCIAL */}
          <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
            <h2 className="text-xl mb-4">Connect</h2>

            <div className="flex justify-center gap-6 text-gray-400">
  <a 
    href="https://www.instagram.com/u.s_art_gallery/?hl=en" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Instagram
  </a>

  <a 
    href="https://www.linkedin.com/in/upasana-sarma-878088203/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    LinkedIn
  </a>

  <a 
    href="https://www.facebook.com/profile.php?id=100076337530151&ref=PROFILE_EDIT_xav_ig_profile_page_web#" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Facebook
  </a>
</div>

          </div>

        </div>

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