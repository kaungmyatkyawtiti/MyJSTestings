import { Page1 } from "./AuthDemo"
import withAuth from './withAuth';
import withLogger from "./withLogger"

const CompWithLoggerAndAuth = withLogger(withAuth(Page1));

export default function ComposeDemo() {
  return (
    <div>
      <CompWithLoggerAndAuth />
    </div>
  )
}
