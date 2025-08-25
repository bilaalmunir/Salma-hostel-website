import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Insert into Supabase table `contacts`
    const { data, error } = await supabase
      .from('contacts') // ✅ use plural table name
      .insert([{ name, email, message, createdAt: new Date().toISOString() }])
      .select('*')

    if (error) throw error

    return NextResponse.json({ success: true, contact: data[0] })
  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    )
  }
}
