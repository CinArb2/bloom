import content from '../content.json'

const RecentClients = () => {
  const { recentClients } = content

  return (
    <section id="clients" className="bg-background px-6 pb-20 md:px-12">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 text-sm text-foreground">
            <span className="size-2 rounded-full bg-[#F28A2E]"></span>
            <span>{recentClients.eyebrow}</span>
          </div>
          <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">
            {recentClients.heading}
          </h2>
          <p className="text-sm leading-7 text-foreground">
            {recentClients.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recentClients.items.map((client) => (
            <div
              key={client.name}
              className="rounded-3xl border border-slate-200 p-6 text-brown-dark"
            >
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <span className="mt-2 inline-block rounded-full bg-green-light px-3 py-1 text-xs font-medium text-green-dark">
                {client.role}
              </span>
              <p className="mt-4 text-sm leading-7">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentClients
