export type Authentication = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarURL: string;
  password: string;
};

export type Patient = {
  id: string;
  urlAvatar: string;
  firstName: string;
  lastName: string;
  department: string;
  appointmentDate: string;
  serialNumber: number;
  amount: number;
};

export type HospitalStaff = {
  id: string;
  urlAvatar: string;
  firstName: string;
  lastName: string;
  description: string;
};
