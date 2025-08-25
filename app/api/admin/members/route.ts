import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('createdAt', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {

    const id = crypto.randomUUID()
    const updated_at = new Date().toISOString()
    const { name, email, cnic, roomType } = await request.json()
    console.log('Data in POST:', name, email, cnic, roomType, id, updated_at)

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }


    const { data, error } = await supabase
      .from('members')
      .insert([
        {
          id: id,
          name,
          email,
          cnic,
          roomType,
          createdAt: updated_at,
          updatedAt: updated_at,
        },
      ])
      .select('*') // optional: to return the inserted row(s)

    if (error) throw error

    return NextResponse.json({ success: true, member: data[0] })
  } catch (error) {
    console.error('Error creating member:', error)
    return NextResponse.json(
      { error: 'Failed to create member' },
      { status: 500 }
    )
  }
}
