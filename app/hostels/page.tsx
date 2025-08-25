import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import MasonryGrid from '@/components/masonry-grid'
import { MapPin, Wifi, Car, Users, Shield, Coffee } from 'lucide-react'

const hostelImages = [
  '/placeholder.svg?height=400&width=300',
  '/placeholder.svg?height=500&width=300',
  '/placeholder.svg?height=350&width=300',
  '/placeholder.svg?height=450&width=300',
  '/placeholder.svg?height=400&width=300',
  '/placeholder.svg?height=380&width=300',
  '/placeholder.svg?height=420&width=300',
  '/placeholder.svg?height=360&width=300',
]

const roomTypes = [
  {
    type: 'Single Room',
    price: 'PKR 15,000/month',
    features: ['Private bathroom', 'Study desk', 'Wardrobe', 'AC'],
    available: true
  },
  {
    type: 'Shared Room (2 beds)',
    price: 'PKR 10,000/month',
    features: ['Shared bathroom', 'Study desk', 'Wardrobe', 'AC'],
    available: true
  },
  {
    type: 'Shared Room (4 beds)',
    price: 'PKR 7,500/month',
    features: ['Shared bathroom', 'Study area', 'Lockers', 'Fan'],
    available: false
  }
]

export default function HostelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Student Hostel
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <MapPin size={20} className="mr-2" />
            <span>123 University Road, Lahore, Pakistan</span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            Experience modern living in our fully furnished hostel with all amenities. 
            Located in the heart of the university district with easy access to campus and city center.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
          <MasonryGrid images={hostelImages} />
        </div>

        {/* Room Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Room Types & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{room.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    room.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {room.available ? 'Available' : 'Full'}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-4">{room.price}</p>
                <ul className="space-y-2">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Wifi size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">High-Speed WiFi</span>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Car size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">Parking</span>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Users size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">Common Area</span>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Shield size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">24/7 Security</span>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Coffee size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">Kitchen</span>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Users size={32} className="mx-auto mb-2 text-gray-700" />
              <span className="text-sm text-gray-600">Laundry</span>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fee Structure</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Charges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room Rent</span>
                    <span className="font-medium">As per room type</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Electricity</span>
                    <span className="font-medium">PKR 2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Internet</span>
                    <span className="font-medium">PKR 1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cleaning</span>
                    <span className="font-medium">PKR 500</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">One-time Charges</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security Deposit</span>
                    <span className="font-medium">1 month rent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration Fee</span>
                    <span className="font-medium">PKR 2,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner's Success Story */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Owner's Success Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ahmad Hassan - Hostel Owner"
                width={300}
                height={300}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmad Hassan</h3>
              <p className="text-gray-600 mb-4 font-medium">Founder & Owner, HostelHub</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Starting HostelHub was a dream born from my own struggles as a student. I remember the challenges 
                of finding safe, affordable, and comfortable accommodation during my university years. After graduating 
                with a degree in Business Administration, I decided to create the kind of hostel I wished I had access to."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                "What started as a single 10-room facility in 2018 has now grown into a network of premium student 
                accommodations across the city. We've housed over 500 students and helped them focus on their studies 
                while building lifelong friendships."
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Our success isn't measured just in numbers, but in the success stories of our residents - from 
                students who've graduated with honors to those who've started their own businesses. We're not just 
                providing rooms; we're building a community that supports dreams."
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
