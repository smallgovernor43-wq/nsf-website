<div className="flex gap-6 justify-start mt-8">
            {['f', '𝕏', '📷', '▶', 'in', '📡'].map((emoji, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition font-bold text-lg">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="bg-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our priorities</h2>
          <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded h-64 flex items-center justify-center mb-6">
            <div className="text-8xl">🔬</div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">Accelerate technology & innovation</h3>
            <p className="text-xl text-gray-300">Through innovative partnerships that break down barriers between disciplines and organizations.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold mb-4 text-sm">
                NSF
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Randolph Building<br/>
                401 Dulany Street<br/>
                Alexandria, VA 22314<br/>
                <a href="tel:7032925111" className="text-blue-400 hover:text-blue-300">(703) 292-5111</a>
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">📧 Sign up for email updates</a>
            </div>

            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <nav className="space-y-2 text-sm">
                <div><a href="#" className="text-blue-400 hover:text-blue-300">About NSF</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">Careers</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">Our Directorates & Offices</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">National Science Board</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">Contact Us</a></div>
              </nav>
            </div>

            <div>
              <h4 className="font-bold mb-4">What's New</h4>
              <nav className="space-y-2 text-sm">
                <div><a href="#" className="text-blue-400 hover:text-blue-300">News & Announcements</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">Events</a></div>
                <div><a href="#" className="text-blue-400 hover:text-blue-300">Funding Opportunities</a></div>
              </nav>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
            <p>Publication date: April 21, 2023 | Last updated: August 4, 2026</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
