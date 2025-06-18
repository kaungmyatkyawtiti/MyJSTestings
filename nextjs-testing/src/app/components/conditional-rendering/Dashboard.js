function UserDashboard() {
  return (
    <div>
      UserDashboard
    </div>
  )
}

function AdminDashboard() {
  return (
    <div>
      AdminDashboard
    </div>
  )
}

export default function Dashboard({ admin }) {
  return (
    <>
      {
        admin
          ? <AdminDashboard />
          : <UserDashboard />
      }
    </>
  )
}
