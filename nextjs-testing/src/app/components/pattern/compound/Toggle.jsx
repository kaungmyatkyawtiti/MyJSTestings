import { useContext } from 'react';
import { FlyOutContext } from './FlyOut';

export default function FlyOutToggle() {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <button onClick={() => toggle(!open)}>
      Click
    </button>
  );
}
