

-- Create sample applications using the existing admin user
-- This will provide some test data for the admin dashboard
-- Using correct status values that match the database constraint: pending, reviewed, interviewed, hired, rejected

-- Clear any existing sample data first to avoid conflicts
DELETE FROM public.applications WHERE user_id = 'd4d308fc-e530-47f8-ad10-54483c823bf1';

-- Insert sample applications with valid status values
INSERT INTO public.applications (user_id, job_id, job_title, status, submitted_at, resume_url, cover_letter_url) VALUES
  -- Software Engineer applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-1', 'Software Engineer', 'pending', '2024-06-08 10:30:00', 'https://example.com/resume1.pdf', 'https://example.com/cover1.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-1', 'Software Engineer', 'reviewed', '2024-06-07 14:15:00', 'https://example.com/resume2.pdf', null),
  
  -- Product Manager applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-2', 'Product Manager', 'pending', '2024-06-08 13:25:00', 'https://example.com/resume3.pdf', 'https://example.com/cover3.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-2', 'Product Manager', 'interviewed', '2024-06-07 10:40:00', 'https://example.com/resume4.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-2', 'Product Manager', 'hired', '2024-06-06 15:30:00', 'https://example.com/resume5.pdf', 'https://example.com/cover5.pdf'),
  
  -- UX Designer applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-3', 'UX Designer', 'pending', '2024-06-08 11:20:00', 'https://example.com/resume6.pdf', 'https://example.com/cover6.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-3', 'UX Designer', 'reviewed', '2024-06-07 16:45:00', 'https://example.com/resume7.pdf', null),
  
  -- DevOps Engineer applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-4', 'DevOps Engineer', 'pending', '2024-06-08 15:40:00', 'https://example.com/resume8.pdf', 'https://example.com/cover8.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-4', 'DevOps Engineer', 'reviewed', '2024-06-07 12:25:00', 'https://example.com/resume9.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-4', 'DevOps Engineer', 'rejected', '2024-06-06 10:15:00', 'https://example.com/resume10.pdf', 'https://example.com/cover10.pdf'),
  
  -- Data Scientist applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-5', 'Data Scientist', 'pending', '2024-06-08 09:15:00', 'https://example.com/resume11.pdf', 'https://example.com/cover11.pdf'),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-5', 'Data Scientist', 'interviewed', '2024-06-07 13:50:00', 'https://example.com/resume12.pdf', null),
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-5', 'Data Scientist', 'hired', '2024-06-06 11:35:00', 'https://example.com/resume13.pdf', 'https://example.com/cover13.pdf'),
  
  -- Marketing Manager applications
  ('d4d308fc-e530-47f8-ad10-54483c823bf1', 'job-6', 'Marketing Manager', 'pending', '2024-06-08 14:30:00', 'https://example.com/resume14.pdf', 'https://example.com/cover14.pdf')

ON CONFLICT (id) DO NOTHING;

