import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../page';


describe('Landing Page: has Explore Button', () => {
    test('should render with label "Explore the Ecosystem"', () => {
  
      render(<Home />);
  
      const buttonElement = screen.getByRole('button', {name: "Explore the Ecosystem"});
      expect(buttonElement).toBeInTheDocument()
      expect(buttonElement.textContent).toEqual("Explore the Ecosystem");
  
    });
    test('should be clickable', () => {
  
        render(<Home />);
    
        const buttonElement = screen.getByRole('button', {name: "Explore the Ecosystem"});
        fireEvent.click(buttonElement);
      });

  })

describe('Landing Page has link to documentation', () => {
    test('should render with label "View docs"', () => {
  
      render(<Home />);
  
      const docsLinkElement = screen.getByRole('link');
      expect(docsLinkElement).toHaveTextContent('View docs');

  
    });

    // todo: add test for checking the link
  })