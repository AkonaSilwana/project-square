import { render, screen } from '@testing-library/react';
import About from '../components/About';

jest.mock('../assets/images/Web-Dev-Icon.svg', () => 'webIconPath');
jest.mock('../assets/images/UX-Icon.svg', () => 'uxIconPath');
jest.mock('../assets/images/icon.svg', () => 'iconPath');
jest.mock('../assets/images/App-Dev-Icon.svg', () => 'appDevPath');

describe('About component', () => {
  test('renders component with offerings', () => {
    render(<About />);
    expect(screen.getByText(/What we do/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /We offer a complete range of bespoke design and development services/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions./i
      )
    ).toBeInTheDocument();

  });
});
