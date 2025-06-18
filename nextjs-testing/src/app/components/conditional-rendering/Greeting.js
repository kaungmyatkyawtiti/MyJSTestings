export default function Greeting({ show }) {
  // if (show) {
  //   return (
  //     < div >
  //       <h1>Greeting</h1>
  //     </div >
  //   )
  // } else {
  //   return null;
  // }
  //
  return (
    <div>
      {show && <h1>Greeting</h1>}
    </div>
  )
}
