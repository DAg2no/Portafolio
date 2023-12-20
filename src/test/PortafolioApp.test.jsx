import { render, screen, waitFor } from "@testing-library/react";
import PortafolioApp from "../PortafolioApp";
import '@testing-library/jest-dom'
describe("Pruebas en <PortafioApp/>", () => { 
       
    
          
    test("Renders loading page and transitions to main content on load", async () => {
        render(<PortafolioApp />);
    
        // Expect loading page initially
        expect(screen.getByTestId("loading-page")).toBeInTheDocument()
    
        // Wait for loading to complete with a timeout (adjust based on your app)
        await waitFor(() => expect(screen.queryByTestId("loading-page")).toBeNull(), {
          timeout: 5000, // Adjust timeout as needed
        });
    
        // Expect main content after loading
        expect(screen.getByTestId("main-content")).toBeInTheDocument();
      });
 })