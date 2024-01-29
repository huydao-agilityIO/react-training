// Component
import { Card } from '@shared/components/common';

const hospitalStaff = {
  url: 'https://imgs.search.brave.com/YbuHfY7YK6CuWXrBBzv3nQLty9mGR_hC7L7CsaLjJE8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZiLzUy/LzlmLzZiNTI5ZmRl/MTYxNjU5MmYxMzVj/NGMxMjVjNDdlNGEx/LmpwZw',
  name: 'Lionel Messi',
  description: 'Doctor'
};

describe('Card Component', () => {
  it('renders correctly with props', () => {
    const { url, name, description } = hospitalStaff || {};

    const { asFragment } = testLibReactUtils.render(
      <Card url={url} name={name} description={description} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
