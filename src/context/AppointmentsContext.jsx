import React, { createContext, useContext, useState } from 'react';

const AppointmentsContext = createContext();

export const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2023-10-01', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2023-10-02', time: '11:00 AM', status: 'Pending' },
    { id: 3, patientName: 'Bob Wilson', doctorName: 'Dr. Brown', date: '2023-10-03', time: '2:00 PM', status: 'Confirmed' },
    { id: 4, patientName: 'Alice Cooper', doctorName: 'Dr. Davis', date: '2023-10-04', time: '3:00 PM', status: 'Cancelled' },
    { id: 5, patientName: 'Charlie Brown', doctorName: 'Dr. Miller', date: '2023-10-05', time: '9:00 AM', status: 'Confirmed' },
  ]);

  const addAppointment = (appointment) => {
    const newAppointment = {
      id: appointments.length + 1,
      ...appointment,
      status: 'Confirmed'
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
