import { useContext } from 'react';
import { FlyOutContext } from './FlyOut';

export default function FlyOutList({ children }) {
  const { open } = useContext(FlyOutContext);
  return open && <ol>{children}</ol>;
}

export function FlyOutItem({ children }) {
  return <li>{children}</li>;
}
