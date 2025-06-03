import { notFound } from "next/navigation"
import Image from "next/image"
import { getServices } from "../../lib/data"
import Link from "next/link"

// Required for static export - generates all possible slug values at build time
export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.id,
  }))
}

interface ServiceDetailProps {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = await params
  const services = await getServices()
  const service = services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="hero-gradient-bg py-20">
      <div className="container mx-auto px-4 text-text-light">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center space-x-2">
            <li className="flex items-center">
              <Link href="/" className="text-text-light hover:underline">
                Home
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-2 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 79.225c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href="/#services" className="text-text-light hover:underline">
                Services
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-2 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 79.225c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.30c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-300" aria-current="page">
                {service.name}
              </span>
            </li>
          </ol>
        </nav>

        <div className="bg-background p-8 rounded-lg shadow-xl flex flex-col md:flex-row gap-8">
          {service.img && (
            <div className="relative h-64 md:h-auto md:w-1/3 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={service.img || "/placeholder.svg"}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{service.name}</h1>

            <div className="text-text-secondary prose max-w-none leading-relaxed mb-8">
              <p>{service.longDescription}</p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-primary text-text-light px-8 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-primary-dark transition-all duration-300"
              >
                Inquire About This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
