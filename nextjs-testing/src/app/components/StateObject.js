import { useState } from "react"

export default function StateObject() {
  let [profile, setProfile] = useState({
    name: "Kmk",
    address: "Ygn",
  })

  const updateAddressHandler = () => {
    // profile.address = "another";
    setProfile({
      ...profile,
      address: "Another",
    })
  }

  return (
    <div>
      <span>Name: {profile.name}</span> <br />
      <span>Address: {profile.address}</span> <br />

      <button type="button" onClick={updateAddressHandler}>Update</button>
    </div>
  )
}
