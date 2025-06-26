export function useAuth() {
  return { auth: false };
}

export function withAuth(Component) {
  const WrappedComponent = (props) => {
    const { auth } = useAuth();
    return auth ? <Component {...props} /> : <h2>401 unauthenticated!</h2>
  }

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}

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
