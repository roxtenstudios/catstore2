import { storeItems } from "@/data/storeItems";
import { ArrowLeft, Check, Heart, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/ui/Footer";

export default function ProductPage({ params }: { params: { id: string } }) {
  const item = storeItems.find(i => i.id.toString() === params.id);

  if (!item) {
    notFound();
  }

  const isKitten = item.category === "kittens";

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white border-b-4 border-[#1e293b] sticky top-0 z-50 shadow-sm px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/store" className="flex items-center gap-2 text-[#1e293b] hover:text-primary-dark transition-colors font-black">
            <ArrowLeft className="w-5 h-5" /> Back to Store
          </Link>
          <h1 className="text-xl md:text-3xl font-black text-[#1e293b] truncate max-w-[200px] md:max-w-none">
            {item.name}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Image Gallery */}
          <div className={`relative rounded-[2rem] md:rounded-[3rem] p-4 ${item.bg} border-4 border-[#1e293b] shadow-sticker sticky top-24`}>
            <div className="relative aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-4 border-[#1e293b] bg-white">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              
              <div className="absolute top-4 left-4 z-10 rotate-[-5deg]">
                <span className={`px-4 py-2 rounded-xl text-sm font-black border-2 border-[#1e293b] shadow-[0_4px_0_0_rgba(30,41,59,1)] uppercase ${
                  item.status === "Available" || item.status === "In Stock"
                  ? "bg-green-400 text-[#1e293b]" 
                  : "bg-gray-200 text-gray-500"
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="bg-white text-[#1e293b] text-sm font-black px-3 py-1.5 rounded-lg border-2 border-[#1e293b] shadow-sm uppercase tracking-wider">
                {item.type}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-[#1e293b] mb-4 leading-none">{item.name}</h1>
            
            <div className="text-4xl md:text-5xl font-black text-primary-dark mb-8">
              {item.priceLabel}
            </div>

            <p className="text-lg md:text-xl text-[#475569] font-bold leading-relaxed mb-10">
              {item.description}
            </p>

            {/* Traits */}
            <div className="mb-10">
              <h3 className="font-black text-xl text-[#1e293b] mb-4">Highlights</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {item.traits.map(trait => (
                  <div key={trait} className="bg-accent-peach text-[#1e293b] font-black px-4 py-2 rounded-xl border-2 border-[#1e293b] shadow-sticker flex items-center gap-2 rotate-[-1deg]">
                    <Check className="w-4 h-4 text-primary-dark" /> {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button 
              disabled={item.status === "Reserved"}
              className={`w-full py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl transition-all flex items-center justify-center gap-3 border-4 border-[#1e293b] shadow-[0_6px_0_0_rgba(30,41,59,1)] ${
                item.status === "Reserved" 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300 shadow-none"
                : "bg-primary text-white hover:translate-y-1 hover:shadow-[0_0px_0_0_rgba(30,41,59,1)] hover:bg-primary-dark"
              }`}
            >
              {isKitten ? "Begin Adoption Application" : "Add to Cart"}
              {item.status !== "Reserved" && <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t-4 border-dashed border-[#1e293b]/20">
              <div className="flex items-center gap-3 text-[#475569] font-bold">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                {isKitten ? "Health Guaranteed" : "Quality Insured"}
              </div>
              <div className="flex items-center gap-3 text-[#475569] font-bold">
                {isKitten ? <Heart className="w-8 h-8 text-red-500" /> : <Truck className="w-8 h-8 text-blue-500" />}
                {isKitten ? "Ethically Raised" : "Fast Shipping"}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
