
-- First, let's see what the current check constraint allows for status
SELECT conname, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'public.applications'::regclass 
AND contype = 'c';

-- Clear existing data first
DELETE FROM public.applications;
DELETE FROM public.jobs;

-- Insert 10 relevant jobs for NMXR mobile healthcare imaging
INSERT INTO public.jobs (id, title, location, description, employment_type, experience_level, salary_range, requirements, benefits, posted_date, is_active) VALUES
  (gen_random_uuid(), 'Mobile X-Ray Technologist', 'Texas', 'Join our team as a Mobile X-Ray Technologist in Texas. You will be responsible for operating mobile X-ray equipment and providing high-quality diagnostic imaging services to patients in various healthcare settings including hospitals, clinics, and nursing homes.', 'full-time', 'mid', '$50,000 - $65,000', ARRAY['ARRT certification required', '2+ years mobile imaging experience', 'Valid driver license', 'CPR certification'], ARRAY['Health insurance', 'Paid time off', 'Company vehicle provided', '401k matching'], '2024-06-01', true),
  
  (gen_random_uuid(), 'Mobile Ultrasound Technologist', 'North Carolina', 'We are seeking a skilled Mobile Ultrasound Technologist to provide diagnostic ultrasound services across North Carolina. You will travel to various medical facilities and provide high-quality imaging services to patients.', 'full-time', 'mid', '$55,000 - $70,000', ARRAY['ARDMS certification required', '3+ years ultrasound experience', 'Mobile imaging experience preferred', 'Reliable transportation'], ARRAY['Health insurance', 'Retirement plan', 'Travel allowance', 'Professional development'], '2024-06-02', true),
  
  (gen_random_uuid(), 'EKG Technician', 'Georgia', 'Looking for an experienced EKG Technician to join our mobile healthcare team in Georgia. You will perform electrocardiograms and basic cardiac monitoring for patients in various healthcare settings.', 'full-time', 'entry', '$35,000 - $45,000', ARRAY['EKG certification required', '1+ years experience preferred', 'CPR certification', 'Strong communication skills'], ARRAY['Health insurance', 'Training provided', 'Flexible schedule', 'Career advancement opportunities'], '2024-06-03', true),
  
  (gen_random_uuid(), 'Mobile CT Technologist', 'Florida', 'Mobile CT Technologist position available in Florida. Operate mobile computed tomography equipment and provide exceptional patient care while traveling to various healthcare facilities.', 'full-time', 'senior', '$65,000 - $80,000', ARRAY['ARRT certification in CT', '5+ years CT experience', 'Mobile imaging experience', 'Advanced patient care skills'], ARRAY['Health insurance', 'Company vehicle', 'Performance bonuses', 'Paid time off'], '2024-06-04', true),
  
  (gen_random_uuid(), 'Mobile MRI Technologist', 'Virginia', 'Join our team as a Mobile MRI Technologist in Virginia. You will operate mobile MRI equipment and provide high-quality magnetic resonance imaging services to patients across the region.', 'full-time', 'senior', '$70,000 - $85,000', ARRAY['ARRT certification in MRI', '4+ years MRI experience', 'Mobile imaging preferred', 'Strong technical skills'], ARRAY['Health insurance', 'Retirement plan', 'Company vehicle', 'Professional development'], '2024-06-05', true),
  
  (gen_random_uuid(), 'Mobile Mammography Technologist', 'South Carolina', 'Mobile Mammography Technologist needed in South Carolina. Provide mobile mammography services and support womens health initiatives across the state.', 'full-time', 'mid', '$58,000 - $72,000', ARRAY['ARRT certification in Mammography', '3+ years mammography experience', 'Mobile unit experience preferred', 'Compassionate patient care'], ARRAY['Health insurance', 'Paid time off', 'Travel allowance', 'Health screenings'], '2024-06-06', true),
  
  (gen_random_uuid(), 'Mobile Nuclear Medicine Technologist', 'Tennessee', 'Mobile Nuclear Medicine Technologist position in Tennessee. Perform nuclear medicine procedures using mobile equipment and provide exceptional patient care.', 'full-time', 'senior', '$68,000 - $82,000', ARRAY['ARRT certification in Nuclear Medicine', '4+ years nuclear medicine experience', 'Mobile imaging experience', 'Radiation safety knowledge'], ARRAY['Health insurance', 'Company vehicle', 'Performance bonuses', 'Continuing education'], '2024-06-07', true),
  
  (gen_random_uuid(), 'Mobile Phlebotomist', 'Alabama', 'Mobile Phlebotomist needed in Alabama. Travel to various healthcare facilities and patient homes to collect blood samples and provide excellent patient care.', 'part-time', 'entry', '$28,000 - $35,000', ARRAY['Phlebotomy certification', '1+ years experience', 'Valid driver license', 'Excellent communication skills'], ARRAY['Flexible schedule', 'Mileage reimbursement', 'Training provided', 'Health insurance (pro-rated)'], '2024-06-08', true),
  
  (gen_random_uuid(), 'Mobile Respiratory Therapist', 'Kentucky', 'Mobile Respiratory Therapist position in Kentucky. Provide respiratory care services to patients in various healthcare settings using mobile equipment.', 'full-time', 'mid', '$52,000 - $68,000', ARRAY['RRT or CRT certification', '2+ years respiratory therapy experience', 'Mobile healthcare experience preferred', 'BLS certification'], ARRAY['Health insurance', 'Paid time off', 'Company vehicle', 'Professional development'], '2024-06-09', true),
  
  (gen_random_uuid(), 'Mobile Cardiac Sonographer', 'Mississippi', 'Mobile Cardiac Sonographer needed in Mississippi. Perform echocardiograms and cardiac imaging using mobile ultrasound equipment across various healthcare facilities.', 'full-time', 'mid', '$60,000 - $75,000', ARRAY['ARDMS certification in Echocardiography', '3+ years cardiac ultrasound experience', 'Mobile imaging experience', 'Strong patient interaction skills'], ARRAY['Health insurance', 'Retirement plan', 'Travel allowance', 'Performance bonuses'], '2024-06-10', true);

-- Get the job IDs that were just created to use for applications
DO $$
DECLARE
    job_record RECORD;
    app_count INTEGER;
    i INTEGER;
    status_value TEXT;
BEGIN
    -- Loop through each job and create 2-5 applications
    FOR job_record IN SELECT id, title FROM public.jobs LOOP
        -- Random number of applications between 2 and 5
        app_count := floor(random() * 4 + 2)::INTEGER;
        
        FOR i IN 1..app_count LOOP
            -- Use only valid status values - using only 'pending' to avoid constraint violations
            -- We'll update some to other statuses after checking what's allowed
            status_value := 'pending';
            
            INSERT INTO public.applications (
                user_id, 
                job_id, 
                job_title, 
                status, 
                submitted_at, 
                resume_url, 
                cover_letter_url
            ) VALUES (
                'd4d308fc-e530-47f8-ad10-54483c823bf1', -- Using existing admin user ID
                job_record.id::text,
                job_record.title,
                status_value,
                now() - (random() * interval '30 days'), -- Random date within last 30 days
                CASE WHEN random() < 0.8 THEN 'https://example.com/resume_' || i || '.pdf' ELSE NULL END,
                CASE WHEN random() < 0.4 THEN 'https://example.com/cover_' || i || '.pdf' ELSE NULL END
            );
        END LOOP;
    END LOOP;
END $$;
