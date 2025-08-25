import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const id = crypto.randomUUID()
    const updated_at = new Date().toISOString()
    const { name, email, cnic, roomType, checkIn, checkOut } = await request.json()
    console.log('Booking request:', name, email, cnic, roomType, checkIn, checkOut)

    // Validate required fields
    if (!name || !email || !cnic || !roomType || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Insert into Supabase table `bookings`
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          id:id,
          name,
          email,
          cnic,
          roomType,
          checkIn: checkIn,
          checkOut: checkOut,
          createdAt: new Date().toISOString(),
        },
      ])
      .select('*') // Return inserted record(s)

    if (error) throw error

    return NextResponse.json({ success: true, booking: data[0] })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    )
  }
}
