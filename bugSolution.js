```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home</h1>
      {location.pathname === '/about' && <About/>}
    </div>
  );
}

function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404</h1>; }
export default App;
```