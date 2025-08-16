export function useAuth() {
  return { auth: false };
}

export default function withAuth(Component) {
  const WrappedComponent = (props) => {
    const { auth } = useAuth();

    return (
      auth
        ? <Component {...props} />
        : <h2>401 unauthenticated!</h2>
    )
  }

  WrappedComponent.displayName = `withAuth(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}
