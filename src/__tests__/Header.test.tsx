import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

jest.mock('../assets/images/logo.svg', () => 'mockLogo');

describe('Header component', () => {
  test('renders the header with expected text content', () => {
    render(<Header />);

    expect(screen.getByAltText(/header-logo/i)).toBeInTheDocument();
    expect(screen.getByText(/☰/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Industries/i)).toBeInTheDocument();
    expect(screen.getByText(/Careers/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Let's Talk/i)).toBeInTheDocument();
  });
});

