export default function withLogger(Component) {
  const WrappedComponent = (props) => {
    console.log("render withLogger", Component.displayName);
    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withLogger(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}

// export default function withLogger(Component) {
//   return function WrappedComponent(props) {
//     console.log("render withLogger", Component.name);
//     return <Component {...props} />;
//   }
// }


