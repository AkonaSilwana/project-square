import { render, screen } from '@testing-library/react';
import Brands from '../components/Brands';

jest.mock('../assets/images/visa-black.svg', () => 'mockVisa');
jest.mock('../assets/images/wesgrow-black.svg', () => 'mockWesgrow');


describe('Brands component', () => {
  test('renders component with brand images', () => {
    render(<Brands />);

    expect(screen.getByText(/You'll be in good company/i)).toBeInTheDocument();

    expect(screen.getByText(/Trusted by leading brands/i)).toBeInTheDocument();

    const brandImageElements = screen.getAllByAltText(/Image \d+/i);
    expect(brandImageElements).toHaveLength(brandImageElements.length);

  });
});
