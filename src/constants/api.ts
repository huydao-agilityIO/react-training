export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const ERROR_MESSAGES_SERVICES = {
  API: 'API not found!',
  END_POINT: 'Something went wrong!!!'
};

export const END_POINTS = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
  PATIENT: 'patient',
  HOSPITAL_STAFF: 'hospital-staff'
};

// TODO: Update later
export const API_HOSPITAL_MANAGEMENT = {
  AUTHENTICATION_SIGN_IN: `${process.env.VITE_NX_AUTHENTICATION}/${END_POINTS.SIGN_IN}`,
  AUTHENTICATION_SIGN_UP: `${process.env.VITE_NX_AUTHENTICATION}/${END_POINTS.SIGN_UP}`
};
