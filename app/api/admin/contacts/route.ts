import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)
export async function GET() {
  try {
    // Fetch contacts ordered by createdAt DESC
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('createdAt', { ascending: false })
      console.log('data',data)

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}
