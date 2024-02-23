import { DeletePatientModal } from '@shared/components';

describe('DeletePatientModal', () => {
  const onCloseModalDeletePatient = jest.fn();
  const onDeletePatient = jest.fn();

  it('renders correctly', () => {
    const { asFragment } = testLibReactUtils.render(
      <DeletePatientModal
        isOpenModalDeletePatient={true}
        onCloseModalDeletePatient={onCloseModalDeletePatient}
        onDeletePatient={onDeletePatient}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onDeletePatient when delete button is clicked', async () => {
    const { getByText } = testLibReactUtils.render(
      <DeletePatientModal
        isOpenModalDeletePatient={true}
        onCloseModalDeletePatient={onCloseModalDeletePatient}
        onDeletePatient={onDeletePatient}
      />
    );

    testLibReactUtils.fireEvent.click(getByText('Delete'));
    await testLibReactUtils.waitFor(() =>
      expect(onDeletePatient).toHaveBeenCalled()
    );
  });

  it('calls onCloseModalDeletePatient when cancel button is clicked', () => {
    const { getByText } = testLibReactUtils.render(
      <DeletePatientModal
        isOpenModalDeletePatient={true}
        onCloseModalDeletePatient={onCloseModalDeletePatient}
        onDeletePatient={onDeletePatient}
      />
    );

    testLibReactUtils.fireEvent.click(getByText('Cancel'));
    expect(onCloseModalDeletePatient).toHaveBeenCalled();
  });
});
