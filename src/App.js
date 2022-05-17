import logo from './logo.svg';
import './App.css';

function App() {
  const renderLayout = (routes, Layout) =>{
    return routes.map(route =>{
      const {path, component, exact, isPrivate} =route;
      return (
        <Layout
        path={path}
        component={component}
        exact={exact}
        isPrivate={isPrivate}
          />

      )
    })
  }
}

export default App;
