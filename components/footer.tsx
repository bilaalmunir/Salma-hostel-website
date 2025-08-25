import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">HostelHub</h3>
            <p className="text-gray-600 mb-4">
              Premium student accommodation with modern amenities and a supportive community.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/hostels" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Hostels
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                info@hostelhub.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2" />
                +92 300 1234567
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-2" />
                Lahore, Pakistan
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 HostelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
