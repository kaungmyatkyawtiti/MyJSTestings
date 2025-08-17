// Dumb conponent
export default function DogImages({ dogs }) {
  return (
    <div>
      {
        dogs.map((dog, index) =>
          <img
            key={index}
            src={dog}
            alt='Dog'
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              margin: "8px"
            }}
          />
        )
      }
    </div>
  )
}
