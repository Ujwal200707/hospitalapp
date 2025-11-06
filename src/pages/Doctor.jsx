import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Grid,
  Alert
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useAppointments } from '../context/AppointmentsContext';

const Doctor = () => {
  const { addAppointment } = useAppointments();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctor: '',
    appointmentDate: null,
    appointmentTime: null,
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const doctors = [
    'Dr. Smith - Cardiologist',
    'Dr. Johnson - Dermatologist',
    'Dr. Williams - Orthopedic',
    'Dr. Brown - Pediatrician',
    'Dr. Davis - Neurologist'
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      doctor: '',
      appointmentDate: null,
      appointmentTime: null,
      reason: ''
    });
    setSubmitted(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      patientName: formData.patientName,
      doctorName: formData.doctor,
      date: formData.appointmentDate.format('YYYY-MM-DD'),
      time: formData.appointmentTime.format('h:mm A'),
      status: 'Confirmed'
    };
    addAppointment(newAppointment);
    console.log('Appointment scheduled:', newAppointment);
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <div style={{ marginTop: 60, padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '10px 20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ margin: 0, color: '#333', fontSize: '24px' }}>Doctors Appointment</h2>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: '#40b544', marginBottom: '20px' }}>Doctor Page</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Welcome to the Doctor's section. Here you can manage appointments and more.</p>

        <div style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginTop: '20px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ color: '#333' }}>Upcoming Appointments</h3>
          <p style={{ color: '#666' }}>No appointments scheduled yet.</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            sx={{
              backgroundColor: '#40b544',
              '&:hover': {
                backgroundColor: '#388e3c'
              }
            }}
          >
            Schedule Appointment
          </Button>
        </div>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle sx={{ backgroundColor: '#40b544', color: 'white' }}>
            Schedule New Appointment
          </DialogTitle>
          <DialogContent sx={{ padding: 3 }}>
            {submitted ? (
              <Alert severity="success" sx={{ mt: 2 }}>
                Appointment scheduled successfully! We'll send you a confirmation email shortly.
              </Alert>
            ) : (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Patient Name"
                      value={formData.patientName}
                      onChange={(e) => handleChange('patientName', e.target.value)}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#fafafa',
                          '& fieldset': {
                            borderColor: '#c8e6c9',
                          },
                          '&:hover fieldset': {
                            borderColor: '#40b544',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#40b544',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#666',
                          '&.Mui-focused': {
                            color: '#40b544',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#fafafa',
                          '& fieldset': {
                            borderColor: '#c8e6c9',
                          },
                          '&:hover fieldset': {
                            borderColor: '#40b544',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#40b544',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#666',
                          '&.Mui-focused': {
                            color: '#40b544',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#fafafa',
                          '& fieldset': {
                            borderColor: '#c8e6c9',
                          },
                          '&:hover fieldset': {
                            borderColor: '#40b544',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#40b544',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#666',
                          '&.Mui-focused': {
                            color: '#40b544',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel sx={{
                        color: '#666',
                        '&.Mui-focused': {
                          color: '#40b544',
                        },
                      }}>Select Doctor</InputLabel>
                      <Select
                        value={formData.doctor}
                        onChange={(e) => handleChange('doctor', e.target.value)}
                        label="Select Doctor"
                        sx={{
                          height: '56px',
                          borderRadius: '8px',
                          backgroundColor: '#fafafa',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#c8e6c9',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#40b544',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#40b544',
                          },
                          '& .MuiSelect-select': {
                            height: '56px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 14px',
                            fontSize: '16px',
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              maxHeight: '300px',
                              mt: 1,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            },
                          },
                          anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                          },
                          transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                          },
                        }}
                      >
                        {doctors.map((doctor, index) => (
                          <MenuItem
                            key={index}
                            value={doctor}
                            sx={{
                              padding: '12px 16px',
                              fontSize: '16px',
                              whiteSpace: 'normal',
                              wordWrap: 'break-word',
                              minHeight: '48px',
                              '&:hover': {
                                backgroundColor: '#e8f5e8',
                              },
                              '&.Mui-selected': {
                                backgroundColor: '#c8e6c9',
                                '&:hover': {
                                  backgroundColor: '#b8e6b8',
                                },
                              },
                            }}
                          >
                            {doctor}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      label="Appointment Date"
                      value={formData.appointmentDate}
                      onChange={(newValue) => handleChange('appointmentDate', newValue)}
                      minDate={dayjs()}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          required: true,
                          sx: {
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                              '& fieldset': {
                                borderColor: '#c8e6c9',
                              },
                              '&:hover fieldset': {
                                borderColor: '#40b544',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#40b544',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666',
                              '&.Mui-focused': {
                                color: '#40b544',
                              },
                            },
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TimePicker
                      label="Appointment Time"
                      value={formData.appointmentTime}
                      onChange={(newValue) => handleChange('appointmentTime', newValue)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          required: true,
                          sx: {
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                              '& fieldset': {
                                borderColor: '#c8e6c9',
                              },
                              '&:hover fieldset': {
                                borderColor: '#40b544',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#40b544',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#666',
                              '&.Mui-focused': {
                                color: '#40b544',
                              },
                            },
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Reason for Visit"
                      multiline
                      rows={3}
                      value={formData.reason}
                      onChange={(e) => handleChange('reason', e.target.value)}
                      placeholder="Please describe the reason for your appointment..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          backgroundColor: '#fafafa',
                          '& fieldset': {
                            borderColor: '#c8e6c9',
                          },
                          '&:hover fieldset': {
                            borderColor: '#40b544',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#40b544',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#666',
                          '&.Mui-focused': {
                            color: '#40b544',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </DialogContent>
          <DialogActions sx={{ padding: 3 }}>
            {!submitted && (
              <>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#40b544',
                    '&:hover': {
                      backgroundColor: '#388e3c'
                    }
                  }}
                  disabled={!formData.patientName || !formData.email || !formData.doctor || !formData.appointmentDate || !formData.appointmentTime}
                >
                  Schedule Appointment
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </div>
  );
};

export default Doctor;
