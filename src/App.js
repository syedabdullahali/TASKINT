import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page/page.tsx";
// import Subject from "./Page/Subject/Subject.tsx";
import { lazy, Suspense } from "react";
const Subject = lazy(()=>import('./Page/Subject/Subject.tsx'))
function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Page/>} >
              <Route index element={
                <Suspense fallback={<p>Loading....</p>}>
                <Subject/>
                </Suspense>
                } />
            </Route>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
