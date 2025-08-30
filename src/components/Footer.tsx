const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-6 lg:mx-auto lg:max-w-[1188px]">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="size-8 rounded-full bg-gradient-hero"></div>
              <span className="text-xl font-bold">Bloom Recruiting and HR</span>
            </div>
            <p className="mb-6 max-w-md text-muted-foreground">
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
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Direct Hire
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Contract Staffing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Career Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-background">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-muted-foreground/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Bloom Recruiting and HR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
