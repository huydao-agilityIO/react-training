// Types
import { HeadingMapping, Patient } from '@shared/types';

export const PATIENT: Patient = {
  urlAvatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1238.jpg',
  firstName: 'Koby',
  lastName: 'Glover',
  department: 'Outdoors',
  appointmentDate: '2024-02-04T12:51:18.506Z',
  serialNumber: '10017009',
  amount: 59786,
  id: '1'
};

export const PATIENT_HEADING_MAPPING: HeadingMapping[] = [
  {
    key: 'HD1',
    label: 'Patients Name',
    cellStyle: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: 'xs',
      color: 'light.300',
      textTransform: 'capitalize'
    }
  },
  {
    key: 'HD2',
    label: 'department',
    cellStyle: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: 'xs',
      color: 'light.300',
      textTransform: 'capitalize'
    }
  },
  {
    key: 'HD3',
    label: 'Appointment Date',
    cellStyle: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: 'xs',
      color: 'light.300',
      textTransform: 'capitalize'
    }
  },
  {
    key: 'HD4',
    label: 'Serial Number',
    cellStyle: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: 'xs',
      color: 'light.300',
      textTransform: 'capitalize'
    }
  },
  {
    key: 'HD5',
    label: 'Amount',
    cellStyle: {
      fontFamily: 'heading',
      fontWeight: 'semibold',
      fontSize: 'xs',
      color: 'light.300',
      textTransform: 'capitalize'
    }
  },
  {
    key: 'HD6',
    label: ''
  }
];
