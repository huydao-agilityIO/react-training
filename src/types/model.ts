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
  serialNumber: string;
  amount: number;
};
