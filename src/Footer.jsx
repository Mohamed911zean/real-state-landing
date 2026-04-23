export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter text-black">FIND</h2>
            <p className="text-neutral-500 leading-relaxed">
              Find You. We’ll Help You Get There. Experience the future of real estate with our expert agents and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'YT', 'LI'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">Company</h3>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Join the Movement</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">Contact</h3>
            <ul className="space-y-4 text-neutral-500">
              <li>5 West 37th Street, 12th Floor,<br />New York, NY 10018</li>
              <li>hello@findrealestate.com</li>
              <li>+1 212 994 9965</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-black">Newsletter</h3>
            <p className="text-neutral-500">Subscribe to get the latest market reports and exclusive listings.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-neutral-100 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-black outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white rounded-full text-sm font-bold hover:bg-neutral-800 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between gap-6 text-sm text-neutral-400">
          <p>© 2026 FIND Real Estate. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Fair Housing Notice</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
