import { HashRouter, Route, Routes } from "react-router-dom";

import routes from "@/navigation/routes";
import Navigation from "./components/ui/Navigation";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} Component={r.component} />
            ))}
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
