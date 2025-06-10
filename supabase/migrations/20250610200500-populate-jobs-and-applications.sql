
-- Insert jobs that match the frontend jobs.ts data structure
INSERT INTO public.jobs (id, title, location, description, employment_type, experience_level, salary_range, requirements, benefits, posted_date, is_active) VALUES
  ('1', 'Mobile X-Ray Technologist', 'Texas', 'Join our team as a Mobile X-Ray Technologist in Texas. You will be responsible for operating mobile X-ray equipment and providing high-quality diagnostic imaging services.', 'full-time', 'mid', '$50,000 - $65,000', ARRAY['ARRT certification', '2+ years experience', 'Valid driver license'], ARRAY['Health insurance', 'Paid time off', 'Company vehicle'], '2024-06-01', true),
  ('2', 'Mobile Ultrasound Technologist', 'North Carolina', 'We are seeking a skilled Mobile Ultrasound Technologist to provide diagnostic ultrasound services across North Carolina.', 'full-time', 'mid', '$55,000 - $70,000', ARRAY['ARDMS certification', '3+ years experience', 'Reliable transportation'], ARRAY['Health insurance', 'Retirement plan', 'Travel allowance'], '2024-06-02', true),
  ('3', 'EKG Technician', 'Georgia', 'Looking for an experienced EKG Technician to join our mobile healthcare team in Georgia.', 'full-time', 'entry', '$35,000 - $45,000', ARRAY['EKG certification', '1+ years experience', 'CPR certification'], ARRAY['Health insurance', 'Training provided', 'Flexible schedule'], '2024-06-03', true),
  ('4', 'Mobile X-Ray Technologist', 'Raleigh, NC', 'Mobile X-Ray Technologist position available in Raleigh, NC. Provide imaging services to patients in various healthcare settings.', 'full-time', 'mid', '$52,000 - $67,000', ARRAY['ARRT certification', 'Mobile experience preferred', 'Professional demeanor'], ARRAY['Health insurance', 'Paid time off', 'Professional development'], '2024-06-04', true),
  ('5', 'Mobile Ultrasound Technologist', 'Dallas, TX', 'Join our Dallas team as a Mobile Ultrasound Technologist. Work with state-of-the-art equipment and serve diverse patient populations.', 'full-time', 'senior', '$60,000 - $75,000', ARRAY['ARDMS certification', '5+ years experience', 'Leadership skills'], ARRAY['Health insurance', 'Retirement plan', 'Performance bonuses'], '2024-06-05', true),
  ('6', 'EKG Technician', 'Charlotte, NC', 'EKG Technician opportunity in Charlotte, NC. Be part of a dynamic mobile healthcare team.', 'full-time', 'entry', '$38,000 - $48,000', ARRAY['EKG certification', 'Customer service skills', 'Detail oriented'], ARRAY['Health insurance', 'Training program', 'Career advancement'], '2024-06-06', true),
  ('7', 'Mobile X-Ray Technologist', 'Houston, TX', 'Mobile X-Ray Technologist needed in Houston, TX. Excellent opportunity for career growth.', 'full-time', 'mid', '$53,000 - $68,000', ARRAY['ARRT certification', '2+ years experience', 'Team player'], ARRAY['Health insurance', 'Paid time off', 'Company vehicle'], '2024-06-07', true),
  ('8', 'Mobile Ultrasound Technologist', 'Asheville, NC', 'Mobile Ultrasound Technologist position in beautiful Asheville, NC. Serve the mountain region with quality imaging services.', 'full-time', 'mid', '$56,000 - $71,000', ARRAY['ARDMS certification', '3+ years experience', 'Mountain driving experience'], ARRAY['Health insurance', 'Retirement plan', 'Scenic work environment'], '2024-06-08', true),
  ('9', 'EKG Technician', 'Roanoke, VA', 'EKG Technician opportunity in Roanoke, VA. Join our expanding mobile healthcare services.', 'full-time', 'entry', '$36,000 - $46,000', ARRAY['EKG certification', 'Reliable transportation', 'Professional attitude'], ARRAY['Health insurance', 'Training provided', 'Growth opportunities'], '2024-06-09', true),
  ('10', 'Mobile X-Ray Technologist', 'Fayetteville, NC', 'Mobile X-Ray Technologist position in Fayetteville, NC. Serve military and civilian populations.', 'full-time', 'mid', '$51,000 - $66,000', ARRAY['ARRT certification', 'Military experience preferred', 'Security clearance eligible'], ARRAY['Health insurance', 'Veteran benefits', 'Stable employment'], '2024-06-10', true);

-- Insert sample applications using the correct job IDs and the admin user
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
