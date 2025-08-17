import { useState } from 'react';

function Kelvin({ value }) {
  return (
    <div>
      {
        value && parseInt(value || 0) + 273.15 + "K"
      }
    </div>
  )
}

function Fahrenheit({ value }) {
  return (
    <div>
      {
        value && (parseInt(value || 0) * 9) / 5 + 32 + "°F"
      }
    </div>
  )
}

function Input({ render }) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {
        render(value)
      }
    </>
  );
}

export default function TempConverter() {
  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}
