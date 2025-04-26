"use client"

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { featuredProperties } from '@/lib/data'
import { formatCurrency } from '@/lib/utils'

export default function PropertyDetail() {
  const params = useParams()
  const property = featuredProperties.find(p => p.id === params.id)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Property not found</h1>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${property.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{property.title}</h1>
            <p className="text-xl md:text-2xl">{property.location}</p>
          </motion.div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Property Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600">Price</p>
                    <p className="text-2xl font-semibold text-primary-600">{formatCurrency(property.price)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Area</p>
                    <p className="text-2xl font-semibold">{property.area} sq ft</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Bedrooms</p>
                    <p className="text-2xl font-semibold">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Bathrooms</p>
                    <p className="text-2xl font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Experience luxury living in this stunning {property.title.toLowerCase()} located in the prestigious {property.location} area. 
                  This exceptional property offers {property.bedrooms} spacious bedrooms and {property.bathrooms} elegant bathrooms, 
                  providing ample space for comfortable living. With {property.area} square feet of living space, 
                  this property perfectly balances luxury and functionality.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Interested in this property?</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="I'm interested in this property..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 