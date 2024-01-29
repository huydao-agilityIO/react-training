import { ProgressBar } from '..';

describe('Button Component', () => {
  it('match snapshot with primary variant', () => {
    const { asFragment } = testLibReactUtils.render(
      <ProgressBar variant="default" size="md" label="Default" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('match snapshot with success variant', () => {
    const { asFragment } = testLibReactUtils.render(
      <ProgressBar variant="success" size="md" label="Success" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('match snapshot with danger variant', () => {
    const { asFragment } = testLibReactUtils.render(
      <ProgressBar variant="danger" size="md" label="Danger" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('match snapshot with warning variant', () => {
    const { asFragment } = testLibReactUtils.render(
      <ProgressBar variant="warning" size="md" label="Warning" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct progress value', () => {
    const { getByText } = testLibReactUtils.render(<ProgressBar value={50} />);

    expect(getByText('50%')).toBeInTheDocument();
  });
});
