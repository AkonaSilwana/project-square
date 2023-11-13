import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

jest.mock('../assets/images/confidence.jpeg', () => 'confidenceImagePath');

describe('Hero component', () => {
  test('renders component with hero content', () => {
    render(<Hero />);

    expect(screen.getByAltText(/Jose Mourinho/i)).toBeInTheDocument();

    expect(screen.getByText(/Live with Confidence/i)).toBeInTheDocument();
    expect(
      screen.getByText(/José Mourinho brings confidence to pan-Africa Sanlam campaign./i)
    ).toBeInTheDocument();

    expect(screen.getByText(/View project/i)).toBeInTheDocument();
  });
});
