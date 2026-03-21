
import MaintenancePage from "@/components/MaintenanceBanner";
import { Button, Input, message } from "antd";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const [isMaintenance, setIsMaintenance] = useState(false);

  const handleContactSubmit = () => {
    message.success("Message sent!");
    setName("");
    setEmail("");
    setMessageText("");
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const classes = [
    { title: "Yoga", description: "Improve flexibility, posture & mind-body connection.", image: "/images/class1.png" },
    { title: "HIIT", description: "High-intensity workouts for fat burning & endurance.", image: "/images/class2.png" },
    { title: "CrossFit", description: "Functional movements & strength conditioning.", image: "/images/class3.png" },
    { title: "Weight Training", description: "Build muscle, tone body & increase metabolism.", image: "/images/class4.png" },
  ];

  const trainers = [
    { name: "John Doe", specialty: "Yoga Trainer", image: "/images/trainer1.png" },
    { name: "Jane Smith", specialty: "HIIT Coach", image: "/images/trainer2.png" },
    { name: "Mike Johnson", specialty: "CrossFit Coach", image: "/images/trainer3.png" },
    { name: "Sara Lee", specialty: "Personal Trainer", image: "/images/trainer4.png" },
  ];

  const memberships = [
    { name: "Basic", price: "$20/mo", features: ["Gym access", "1 personal session"], linear: "from-gray-700 to-gray-900" },
    { name: "Premium", price: "$35/mo", features: ["Gym access", "5 personal sessions", "Group classes"], linear: "from-orange-500 to-red-600" },
    { name: "Elite", price: "$49/mo", features: ["All access", "Unlimited sessions", "Diet plan"], linear: "from-blue-500 to-indigo-700" },
  ];

  return (
    <>
      <MaintenancePage />

      {!isMaintenance && (
        <div className="font-sans text-gray-100">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
              <div className="text-2xl font-bold text-orange-500 cursor-pointer" onClick={() => scrollToSection("hero")}>
                PowerForge
              </div>
              <div className="hidden md:flex gap-8 text-white font-semibold">
                <button onClick={() => scrollToSection("hero")}>Home</button>
                <button onClick={() => scrollToSection("about")}>About</button>
                <button onClick={() => scrollToSection("trainers")}>Trainers</button>
                <button onClick={() => scrollToSection("contact")}>Contact</button>
              </div>
              <div className="flex gap-2">
                <Button>Sign In</Button>
                <Button type="primary" className="bg-orange-500! hover:bg-orange-600! text-white!">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section
            id="hero"
            className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-12 md:pt-20 px-4 sm:px-6 lg:px-8"
            style={{
              background: "linear-linear(135deg, #1E3A8A 0%, #7F3DFF 50%, #EC4899 100%)"
            }}
          >
            {/* Responsive Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/90 via-purple-600/80 to-pink-600/90" />

            {/* Responsive Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">

              {/* Left Content - Fully Responsive */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start">

                {/* Main Headline - Responsive Text */}
                <h1 className="pt-6 md:pt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Transform Your{' '}
                  <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
                    Body
                  </span>
                </h1>

                {/* Subtitle - Responsive */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100/90 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Premium gym facilities with expert trainers.
                  Transform your fitness journey with personalized training programs.
                </p>

                {/* Email Input + Button - Fully Responsive Stack */}
                <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Input
                    placeholder="Enter your email to get started"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-5! text-base sm:text-lg rounded-xl rounded-r-none sm:rounded-r-none border-0 shadow-xl focus:shadow-2xl transition-all duration-300"
                    size="large"
                  />
                  <Button
                    type="primary"
                    size="large"
                    className="text-base! sm:text-lg! font-semibold! bg-linear-to-r! from-orange-500! to-orange-600! hover:from-orange-600! hover:to-orange-700! shadow-2xl! hover:shadow-3xl! rounded-xl! sm:rounded-l-none! transition-all! duration-300! flex! items-center! justify-center! min-w-35! sm:min-w-40!"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Stats - Mobile Carousel → Desktop Grid */}
                <div className="flex sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 text-white">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      15+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-medium mt-1">Workouts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                      240+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-medium mt-1">Minutes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      10+
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-medium mt-1">Trainers</p>
                  </div>
                </div>
              </div>

              {/* Right Image - Responsive */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-112.5 lg:h-112.5 xl:w-125 xl:h-125">
                  <img
                    src="/images/trainer1.png"
                    alt="Fitness Trainer"
                    className="w-full h-full object-contain rounded-3xl shadow-3xl ring-4 ring-white/20 hover:scale-105 transition-transform duration-500"
                  />

                  {/* Decorative Badges */}
                  <div className="absolute -top-4 -right-4 bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl shadow-2xl font-bold text-sm sm:text-base">
                    2.95 km
                  </div>
                  <div className="absolute bottom-6 left-4 bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2">
                    <span>450+</span> Video Tutorials
                  </div>
                  <div className="absolute bottom-6 right-4 bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-semibold">
                    200+ Free Workouts
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About / Why Join */}
          <section id="about" className="py-14 px-50 bg-gray-900 flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
              <ul className="list-disc ml-6 text-lg space-y-2">
                <li>Good Workout Facilities</li>
                <li>Expert Coaches</li>
                <li>Consultation With Experts</li>
                <li>Best Gym in Town</li>
              </ul>
              <Button className="mt-6! bg-orange-500! hover:bg-orange-600! text-white! px-6! py-2! rounded-lg! border-none!">See More Benefits</Button>
            </div>
            <div className="md:w-1/2">
              <img src="/images/trainer1.png" className="rounded-xl shadow-2xl" />
            </div>
          </section>

          {/* Trainers */}
          <section id="trainers" className="py-24 px-6 bg-gray-800">
            <h2 className="text-4xl font-bold text-center mb-16!">Meet Our Trainers</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {trainers.map((t, i) => (
                <div key={i} className="w-64 p-6 bg-gray-700 rounded-3xl shadow-2xl hover:scale-105 transform transition text-center">
                  <img src={t.image} className="rounded-full w-36 h-36 mx-auto -mt-20 border-4 border-orange-500 shadow-xl" />
                  <h3 className="text-xl font-bold mt-6 text-white">{t.name}</h3>
                  <p className="text-gray-300">{t.specialty}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Classes */}
          <section className="py-24 px-6 bg-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12">Build a Cool Body</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {classes.map((c, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transform transition">
                  <img src={c.image} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{c.title}</h3>
                    <p className="text-white text-sm">{c.description}</p>
                    <Button className="mt-2! bg-orange-500! hover:bg-orange-600! text-white! w-full! border-none!">Join Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-24 px-6 bg-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto space-y-4!">
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-6 h-14 rounded-lg shadow-md" />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-6 h-14 rounded-lg shadow-md" />
              <Input.TextArea rows={6} placeholder="Message" value={messageText} onChange={(e) => setMessageText(e.target.value)} className="mb-6 rounded-lg shadow-md" />
              <Button
                type="primary"
                size="large"
                block
                onClick={handleContactSubmit}
                className="bg-orange-500! hover:bg-orange-600! font-bold! text-white! rounded-lg!"
              >
                Send Message
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
            <p className="text-lg">&copy; {new Date().getFullYear()} PowerForge. All Rights Reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-orange-500 transition">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition">Twitter</a>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
