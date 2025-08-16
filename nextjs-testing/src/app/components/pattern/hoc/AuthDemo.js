import withAuth from './withAuth';

export function Page1() {
  return (
    <div>
      Page One
    </div>
  )
}

export function Page2() {
  return (
    <div>
      Page two
    </div>
  )
}

const AuthPage1 = withAuth(Page1);
const AuthPage2 = withAuth(Page2);

export default function AuthDemo() {
  return (
    <div>
      <AuthPage1 />
      <AuthPage2 />
    </div>
  )
}
