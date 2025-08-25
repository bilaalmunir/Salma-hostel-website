import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, cnic, roomType, checkIn, checkOut } = await request.json()

    // Validate required fields
    if (!name || !email || !cnic || !roomType || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Save to database
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        cnic,
        roomType,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
      },
    })

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    )
  }
}
