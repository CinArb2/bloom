import content from '../content.json'

const Footer = () => {
  const { footer } = content

  return (
    <footer
      id="contact"
      className="mt-20 bg-orange-light py-16 text-sm text-brown-dark lg:pt-[200px]"
    >
      <div className="container mx-auto px-6 md:mx-12 md:w-auto lg:mx-auto lg:max-w-[1050px]">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="size-4 rounded-full bg-[#F28A2E]"></div>
              <span className="text-xl font-bold">{footer.brand}</span>
            </div>
            <p className="mb-6 max-w-md text-brown-dark">{footer.tagline}</p>
            <div className="space-y-2">
              <p className="text-sm">📧 {footer.contact.email}</p>
              <p className="text-sm">📞 {footer.contact.phone}</p>
              <p className="text-sm">📍 {footer.contact.address}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{footer.services.heading}</h3>
            <ul className="space-y-2 text-sm text-brown-dark">
              {footer.services.items.map((item) => (
                <li key={item}>
                  <a href="#" className="pointer-events-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{footer.company.heading}</h3>
            <ul className="space-y-2 text-sm text-brown-dark">
              {footer.company.items.map((item) => (
                <li key={item}>
                  <a href="#" className="pointer-events-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brown-dark/20 pt-8 text-center text-sm text-brown-dark">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
