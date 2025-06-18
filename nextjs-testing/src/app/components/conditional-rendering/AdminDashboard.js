function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  )
}

function Insight() {
  return (
    <div>
      Insight
    </div>
  )
}

function Setting() {
  return (
    <div>
      Setting
    </div>
  )
}

let mapping = {};
mapping['dashboard'] = <Dashboard />
mapping['insight'] = <Insight />
mapping['setting'] = <Setting />

export default function AdminDashboard({ page }) {
  console.log(mapping[page]);
  let SelectedPageComponent = mapping[page];

  return (
    <div>
      AdminDashboard
      {
        SelectedPageComponent
          ? SelectedPageComponent
          : <h3>Default page</h3>
      }
    </div>
  )
}
