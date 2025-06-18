export default function EventPropagation() {
  const playHandler = (e) => {
    alert('playing!');
    e.stopPropagation();
  }

  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={playHandler}>
        play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}
