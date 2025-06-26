// Explicit is better than implicit *********

import useFetch from "./useFetch";

export default function FetchUser() {
  const [loading, users] = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div>
      {
        loading
          ? <h3>Is loading</h3>
          : <ul>
            {
              users.map(user => <li key={user.id}>{user.name}</li>)
            }
          </ul>
      }
    </div>
  )
}
