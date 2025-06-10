
-- First, let's clear the existing sample data and insert applications with the correct job IDs
-- Looking at the jobs data structure, I need to use the actual job IDs from the frontend

DELETE FROM public.applications;

-- Insert sample applications using the correct job IDs that match the frontend jobs data
-- Based on the jobs.ts file structure, the job IDs should match the actual job entries
INSERT INTO public.applications (user_id, job_id, job_title, status, submitted_at, resume_url, cover_letter_url) VALUES
  -- Using actual job IDs from the jobs data
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'radiologic-tech-houston', 'Radiologic Technologist', 'pending', '2024-06-08 10:30:00', 'https://example.com/resume1.pdf', 'https://example.com/cover1.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'radiologic-tech-houston', 'Radiologic Technologist', 'pending', '2024-06-07 14:15:00', 'https://example.com/resume2.pdf', null),
  
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-dallas', 'Ultrasound Technician', 'pending', '2024-06-08 13:25:00', 'https://example.com/resume3.pdf', 'https://example.com/cover3.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-dallas', 'Ultrasound Technician', 'pending', '2024-06-07 10:40:00', 'https://example.com/resume4.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-dallas', 'Ultrasound Technician', 'pending', '2024-06-06 15:30:00', 'https://example.com/resume5.pdf', 'https://example.com/cover5.pdf'),
  
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'radiologic-tech-charlotte', 'Radiologic Technologist', 'pending', '2024-06-08 11:20:00', 'https://example.com/resume6.pdf', 'https://example.com/cover6.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'radiologic-tech-charlotte', 'Radiologic Technologist', 'pending', '2024-06-07 16:45:00', 'https://example.com/resume7.pdf', null),
  
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ekg-tech-norfolk', 'EKG Technician', 'pending', '2024-06-08 15:40:00', 'https://example.com/resume8.pdf', 'https://example.com/cover8.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ekg-tech-norfolk', 'EKG Technician', 'pending', '2024-06-07 12:25:00', 'https://example.com/resume9.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ekg-tech-norfolk', 'EKG Technician', 'pending', '2024-06-06 10:15:00', 'https://example.com/resume10.pdf', 'https://example.com/cover10.pdf'),
  
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-atlanta', 'Ultrasound Technician', 'pending', '2024-06-08 09:15:00', 'https://example.com/resume11.pdf', 'https://example.com/cover11.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-atlanta', 'Ultrasound Technician', 'pending', '2024-06-07 13:50:00', 'https://example.com/resume12.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'ultrasound-tech-atlanta', 'Ultrasound Technician', 'pending', '2024-06-06 11:35:00', 'https://example.com/resume13.pdf', 'https://example.com/cover13.pdf'),
  
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'radiologic-tech-louisville', 'Radiologic Technologist', 'pending', '2024-06-08 14:30:00', 'https://example.com/resume14.pdf', 'https://example.com/cover14.pdf');
