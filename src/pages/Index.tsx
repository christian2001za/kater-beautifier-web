import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Full Screen Background - No Text Overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: isMobile 
              ? "url('/lovable-uploads/mobileversion.png')" 
              : "url('/lovable-uploads/59188363-f34c-4ddf-a106-4ec3fbad4414.png')",
            backgroundSize: "cover", 
            backgroundPosition: "center",
            height: "100vh"
          }}
        />
        {/* No text or button content in this hero section */}
      </section>

      {/* Product Description Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/Koningsdag%20Kater%20Water.PNG" 
                alt="Kater Water product" 
                className="w-full h-auto rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">De Ultieme Kater Oplossing</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Te diep in het glaasje gekeken? Het loopt wel los. Kater Water is hét premium drankje tegen katers die je weer fris, scherp en goed laat voelen. Het is een heerlijk drankje
                verpakt in een ijskoud blikje. Precies waar je zin in hebt.
                Een zorgvuldig samengestelde mix van essentiële electrolyten, vitaminen, 
                antioxidanten en gember die je lichaam snel helpt herstellen.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Onze unieke formule zorgt ervoor dat je snel hydrateert en de belangrijke 
                voedingsstoffen aanvult die je lichaam nodig heeft na een avondje drinken. 
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Kom bij ons langs op Koningsdag 2025 in de 9 straatjes! We zetten je weer helemaal goed.
              </p>
              <p className="text-xl font-semibold text-blue-800">
                En het beste van alles? Het smaakt fantastisch!
              </p>
              <div className="pt-4 flex gap-4">
                <Button className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-8 py-6"
               
                  >
                  Bestel Nu
                </Button>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 rounded-full px-8 py-6"
              
                  >
                  Meer Informatie
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-24 bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Wat maakt Kater Water zo bijzonder?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Electrolyten Complex</h4>
                <p className="text-gray-700">Herstelt de belangrijke mineralen die je verliest tijdens het drinken, zoals natrium, kalium en magnesium.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Vitamine Boost</h4>
                <p className="text-gray-700">Rijk aan B-vitamines en vitamine C die helpen bij het herstellen van je energieniveau en immuunsysteem.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Natuurlijke Ingrediënten</h4>
                <p className="text-gray-700">Met gember en antioxidanten die ontstekingsremmend werken en je helpen je weer snel fris te voelen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
<section className="mt-32 bg-white py-16 px-4 border-t border-blue-100">
  <div className="max-w-3xl mx-auto text-center space-y-6">
    <h2 className="text-4xl font-bold text-blue-900">Op de hoogte blijven?</h2>
    <p className="text-lg text-gray-700">
      Laat je e-mailadres achter en we laten je weten zodra Kater Water beschikbaar is!
    </p>
    <form
      action="https://formspree.io/f/mjkyagnk" // Replace with your real Formspree endpoint if needed
      method="POST"
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Jouw e-mailadres"
        className="w-full sm:w-auto flex-1 border border-blue-300 rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-900 text-white rounded-full px-8 py-4 hover:bg-blue-800 text-lg font-semibold"
      >
        Aanmelden
      </button>
    </form>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Wat onze klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-800 p-8 rounded-xl">
              <p className="text-lg italic mb-4">"Na een avond stappen voel ik me de volgende dag meestal verschrikkelijk. Met Kater Water ben ik binnen een uur weer de oude. Ongelooflijk!"</p>
              <p className="font-semibold">- Thomas, Amsterdam</p>
            </div>
            <div className="bg-blue-800 p-8 rounded-xl">
              <p className="text-lg italic mb-4">"De smaak is verrassend lekker en fris. Niet wat je verwacht van een functionele drank. En het werkt echt!"</p>
              <p className="font-semibold">- Emma, Utrecht</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">KATER WATER</h2>
          <p className="text-gray-600 mb-6">Premium herstel voor na een avond uit</p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-blue-900 hover:text-blue-700">Instagram</a>
            <a href="#" className="text-blue-900 hover:text-blue-700">Facebook</a>
            <a href="#" className="text-blue-900 hover:text-blue-700">Contact</a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Kater Water. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
