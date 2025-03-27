import { User } from '@/types/user'
import { BASE_API_URL } from '@/config/api'

const USERS_URL = `${BASE_API_URL}/users`

export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch(USERS_URL)
    if (!res.ok) throw new Error(`Error: ${res.status}`)
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch users:', error)
    throw error
  }
}

export async function fetchUserById(id: number): Promise<User> {
  try {
    const res = await fetch(`${USERS_URL}/${id}`)
    if (!res.ok) throw new Error(`Error: ${res.status}`)
    return await res.json()
  } catch (error) {
    console.error(`Failed to fetch user ${id}:`, error)
    throw error
  }
}
