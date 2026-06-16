import { PawPrint, Mail, Phone, MapPin, Camera, Users, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-accent-pink/50 pt-24 pb-12 px-4 relative overflow-hidden">
      
      {/* Decorative Paws */}
      <div className="absolute top-10 right-10 text-primary/10 rotate-12">
        <PawPrint className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 left-10 text-primary/10 -rotate-12">
        <PawPrint className="w-24 h-24" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="font-bold text-2xl text-foreground flex items-center gap-2">
              Royal <span className="text-primary-dark">Persians</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Ethically raising exceptional, healthy, and affectionate Persian kittens for loving homes worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground hover:bg-primary-dark hover:text-white transition-colors shadow-sm">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground hover:bg-primary-dark hover:text-white transition-colors shadow-sm">
                <Users className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-foreground hover:bg-primary-dark hover:text-white transition-colors shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary-dark transition-colors">Available Kittens</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-dark transition-colors">Our Kings & Queens</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-dark transition-colors">The Adoption Process</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-dark transition-colors">Kitten Care Guide</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary-dark transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
                <span>123 Luxury Lane,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-primary-dark shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-primary-dark shrink-0" />
                <span>hello@royalpersians.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Newsletter</h4>
            <p className="text-foreground/70 mb-4">Subscribe to get updates on new litters and cat care tips.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark bg-white"
              />
              <button type="submit" className="bg-foreground text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Royal Persian Cats. All rights reserved. Premium Breeder.</p>
        </div>
      </div>
    </footer>
  );
}
