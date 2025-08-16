import FlyOutToggle from './Toggle';
import FlyOut from './FlyOut';
import FlyOutList, { FlyOutItem } from './FlyoutMenu';

export default function FlyOutDemo() {
  return (
    <FlyOut>
      <FlyOutToggle />
      <FlyOutList>
        <FlyOutItem>Item 1</FlyOutItem>
        <FlyOutItem>Item 2</FlyOutItem>
      </FlyOutList>
    </FlyOut>
  );
}
