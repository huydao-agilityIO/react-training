import { Pagination } from '@shared/components';

describe('Pagination', () => {
  const onChangePageMock = jest.fn();

  it('renders correctly', () => {
    const { container } = testLibReactUtils.render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onChangePage={onChangePageMock}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onChangePage when a different page number is clicked', () => {
    const { getByText } = testLibReactUtils.render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onChangePage={onChangePageMock}
      />
    );
    testLibReactUtils.fireEvent.click(getByText('2'));
    expect(onChangePageMock).toHaveBeenCalledWith(2);
  });
});
