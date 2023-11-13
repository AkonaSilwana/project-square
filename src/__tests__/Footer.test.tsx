import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders component with footer content', () => {
    render(<Footer />);

    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();

    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Impressum/i)).toBeInTheDocument();
    
    expect(screen.getByText(/22 Street name, Surbub, 8000,/i)).toBeInTheDocument();
    expect(screen.getByText(/Cape Town, South Africa/i)).toBeInTheDocument();
    expect(screen.getByText(/\+27 21 431 0001/i)).toBeInTheDocument();
    expect(screen.getByText(/enquiries@website.co.za/i)).toBeInTheDocument();

    expect(screen.getByText(/Explore more jobs/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2000- 2023 company name/i)).toBeInTheDocument();
  });
});
