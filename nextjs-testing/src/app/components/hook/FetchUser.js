// Explicit is better than implicit *********

import { useEffect, useState } from "react"
import UseFetch from "./UseFetch";

let url = "https://jsonplaceholder.org/users";

export default function FetchUser() {
  const [loading, users] = UseFetch(url);

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
