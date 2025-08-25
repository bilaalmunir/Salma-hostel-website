import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, Users, Shield, Wifi, Car } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Student
              <span className="block text-gray-600">Accommodation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Experience comfortable, modern living spaces designed for students. 
              Safe, affordable, and community-focused hostels across the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hostels"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Explore Hostels
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HostelHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide more than just accommodation - we create a home away from home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Connect with like-minded students in a supportive environment</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">24/7 security and CCTV monitoring for your peace of mind</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi size={32} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600">Reliable internet connection for your studies and entertainment</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={32} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600">Easy access to universities, markets, and public transport</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of students who have made HostelHub their home
          </p>
          <Link
            href="/hostels"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Available Rooms
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
