import Navbar from './Navbar';
import Prism from "prismjs";
import { useEffect } from 'react';

const Layout = ({children}) => {
    
    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
        </div>
    )
}

export default Layout;