import { fetchUsers } from '@/services/userService';
import { UserList } from './UserListClient';
import ErrorState from './errors/ErrorState';
import { getErrorState } from '@/utils/getErrorState';

export default async function UserListServer() {
  let users = []

  try {
    users = await fetchUsers()
  } catch (error) {
    const { title, message, variant } = getErrorState(error)
    return (
      <ErrorState
        title={title}
        message={message}
        variant={variant}
        color="text-indigo-600 dark:text-indigo-400"
        iconSize={100}
      />
    )
  }


  return <UserList users={users} />
}