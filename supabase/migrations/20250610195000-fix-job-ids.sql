
-- Fix the job IDs to match the actual job IDs from the jobs.ts file
-- Clear existing sample data first
DELETE FROM public.applications;

-- Insert sample applications using the correct job IDs from jobs.ts (id: "1", "2", etc.)
INSERT INTO public.applications (user_id, job_id, job_title, status, submitted_at, resume_url, cover_letter_url) VALUES
  -- Job ID "1" - Mobile X-Ray Technologist, Texas
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '1', 'Mobile X-Ray Technologist', 'pending', '2024-06-08 10:30:00', 'https://example.com/resume1.pdf', 'https://example.com/cover1.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '1', 'Mobile X-Ray Technologist', 'reviewed', '2024-06-07 14:15:00', 'https://example.com/resume2.pdf', null),
  
  -- Job ID "2" - Mobile Ultrasound Technologist, North Carolina
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '2', 'Mobile Ultrasound Technologist', 'pending', '2024-06-08 13:25:00', 'https://example.com/resume3.pdf', 'https://example.com/cover3.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '2', 'Mobile Ultrasound Technologist', 'interviewed', '2024-06-07 10:40:00', 'https://example.com/resume4.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '2', 'Mobile Ultrasound Technologist', 'hired', '2024-06-06 15:30:00', 'https://example.com/resume5.pdf', 'https://example.com/cover5.pdf'),
  
  -- Job ID "3" - EKG Technician, Georgia
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '3', 'EKG Technician', 'pending', '2024-06-08 11:20:00', 'https://example.com/resume6.pdf', 'https://example.com/cover6.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '3', 'EKG Technician', 'reviewed', '2024-06-07 16:45:00', 'https://example.com/resume7.pdf', null),
  
  -- Job ID "4" - Mobile X-Ray Technologist, Raleigh
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '4', 'Mobile X-Ray Technologist', 'pending', '2024-06-08 15:40:00', 'https://example.com/resume8.pdf', 'https://example.com/cover8.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '4', 'Mobile X-Ray Technologist', 'reviewed', '2024-06-07 12:25:00', 'https://example.com/resume9.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '4', 'Mobile X-Ray Technologist', 'rejected', '2024-06-06 10:15:00', 'https://example.com/resume10.pdf', 'https://example.com/cover10.pdf'),
  
  -- Job ID "5" - Mobile Ultrasound Technologist, Dallas
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '5', 'Mobile Ultrasound Technologist', 'pending', '2024-06-08 09:15:00', 'https://example.com/resume11.pdf', 'https://example.com/cover11.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '5', 'Mobile Ultrasound Technologist', 'interviewed', '2024-06-07 13:50:00', 'https://example.com/resume12.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '5', 'Mobile Ultrasound Technologist', 'hired', '2024-06-06 11:35:00', 'https://example.com/resume13.pdf', 'https://example.com/cover13.pdf'),
  
  -- Job ID "6" - EKG Technician, Charlotte
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '6', 'EKG Technician', 'pending', '2024-06-08 14:30:00', 'https://example.com/resume14.pdf', 'https://example.com/cover14.pdf'),
  
  -- Job ID "7" - Mobile X-Ray Technologist, Houston
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '7', 'Mobile X-Ray Technologist', 'pending', '2024-06-08 16:20:00', 'https://example.com/resume15.pdf', 'https://example.com/cover15.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '7', 'Mobile X-Ray Technologist', 'reviewed', '2024-06-07 11:10:00', 'https://example.com/resume16.pdf', null),
  
  -- Job ID "8" - Mobile Ultrasound Technologist, Asheville
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '8', 'Mobile Ultrasound Technologist', 'pending', '2024-06-08 08:45:00', 'https://example.com/resume17.pdf', 'https://example.com/cover17.pdf'),
  
  -- Job ID "9" - EKG Technician, Roanoke
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '9', 'EKG Technician', 'pending', '2024-06-08 12:15:00', 'https://example.com/resume18.pdf', 'https://example.com/cover18.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '9', 'EKG Technician', 'interviewed', '2024-06-07 09:30:00', 'https://example.com/resume19.pdf', null),
  
  -- Job ID "10" - Mobile X-Ray Technologist, Fayetteville
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', '10', 'Mobile X-Ray Technologist', 'pending', '2024-06-08 17:00:00', 'https://example.com/resume20.pdf', 'https://example.com/cover20.pdf');
