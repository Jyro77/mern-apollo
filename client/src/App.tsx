import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache: cache,
    uri: "http://localhost:4000/graphql",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className='container m-auto h-screen flex items-center justify-center'>
                    <Routes>
                        <Route path='/' element={<Navigate to='/projects' />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route
                            path='/projects/:id'
                            element={<ProjectDetails />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
