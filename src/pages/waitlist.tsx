import Image from "next/image";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <Image
            src="/lovable-uploads/Koningsdag%20Kater%20Water.PNG"
            alt="Kater Water"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text + Form Section */}
        <div className="md:w-1/2 w-full p-10 space-y-6">
          <h1 className="text-4xl font-bold text-blue-900">
            Kom op de Wachtlijst
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Wil jij als eerste weten wanneer Kater Water beschikbaar is? Laat je e-mailadres
            achter en we sturen je een bericht zodra we live zijn.
          </p>

          <form
            action="https://formspree.io/f/mjkyagnk" 
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Jouw e-mailadres"
              className="w-full border border-blue-300 rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white rounded-full px-8 py-4 hover:bg-blue-800 text-lg font-semibold"
            >
              Aanmelden
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
