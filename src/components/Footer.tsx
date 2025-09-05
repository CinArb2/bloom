const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-orange-light py-16 text-sm text-brown-dark lg:pt-[200px]"
    >
      <div className="container mx-auto px-6 lg:mx-auto lg:max-w-[1050px]">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="size-4 rounded-full bg-[#F28A2E]"></div>
              <span className="text-xl font-bold">Bloom Recruiting and HR</span>
            </div>
            <p className="mb-6 max-w-md text-brown-dark">
              Connecting exceptional talent with forward-thinking companies.
              Your success is our mission.
            </p>
            <div className="space-y-2">
              <p className="text-sm">📧 info@bloomrecruitingandhr.com</p>
              <p className="text-sm">📞 (949) 394-4324</p>
              <p className="text-sm">
                📍 8605 Santa Monica BLVD #730920 West Hollywood CA 90069 United
                States
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-brown-dark">
              <li>
                <a href="#" className="pointer-events-none">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Direct Hire
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Contract Staffing
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Career Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-brown-dark">
              <li>
                <a href="#" className="pointer-events-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="pointer-events-none">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brown-dark/20 pt-8 text-center text-sm text-brown-dark">
          <p>&copy; 2025 Bloom Recruiting and HR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
