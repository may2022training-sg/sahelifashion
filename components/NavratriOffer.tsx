import Image from 'next/image'

export function NavratriOffer() {
  const whatsappUrl =
    'https://wa.me/918469484356?text=Hi%20Saheli%20Fashion,%20I%20am%20interested%20in%20your%20Navratri%20Special%20Offer!'

  return (
    <div className="w-full bg-[#FAF6F0] px-4 py-6 md:px-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-6xl mx-auto transition-all duration-300 hover:shadow-2xl"
        aria-label="Saheli Fashion Navratri Special Garba Offer Banner"
      >
        <Image
          src="/images/navratri-offer-banner.jpg"
          alt="Saheli Fashion Navratri Special Garba Offer Banner"
          width={1600}
          height={700}
          className="h-auto w-full rounded-xl border border-[#D4AF37]/30 shadow-lg transition-all duration-300 hover:shadow-2xl"
        />
      </a>
    </div>
  )
}
