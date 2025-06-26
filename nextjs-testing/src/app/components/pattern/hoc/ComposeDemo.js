import { Page1, withAuth } from "./AuthDemo"
import withLogger from "./withLogger"

const CompWithLoggerAndAuth = withLogger(withAuth(Page1));

export default function ComposeDemo() {
  return (
    <div>
      <CompWithLoggerAndAuth />
    </div>
  )
}
