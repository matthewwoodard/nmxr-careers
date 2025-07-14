-- Add Arizona location and remove EKG jobs, update modalities
-- First, let's add modality and certification fields to jobs table
ALTER TABLE public.jobs 
ADD COLUMN modality TEXT,
ADD COLUMN certification TEXT;

-- Update existing jobs with appropriate modalities and certifications
UPDATE public.jobs SET 
  modality = 'X-Ray',
  certification = 'ARRT'
WHERE title LIKE '%X-Ray%';

UPDATE public.jobs SET 
  modality = 'Ultrasound', 
  certification = 'ARDMS'
WHERE title LIKE '%Ultrasound%';

UPDATE public.jobs SET 
  modality = 'EKG',
  certification = 'CET'
WHERE title LIKE '%EKG%';

-- Delete all EKG jobs (fix the type casting issue)
DELETE FROM public.applications WHERE job_id::text IN (
  SELECT id::text FROM public.jobs WHERE modality = 'EKG'
);
DELETE FROM public.jobs WHERE modality = 'EKG';

-- Update all job titles to "Radiologic Technologist" as requested
UPDATE public.jobs SET 
  title = 'Radiologic Technologist'
WHERE modality IN ('X-Ray', 'Ultrasound');

-- Add Arizona locations
INSERT INTO public.jobs (title, location, description, employment_type, experience_level, modality, certification, is_active) VALUES
('Radiologic Technologist', 'Arizona', 'Join our team as a Mobile Radiologic Technologist covering healthcare facilities across Arizona. This role offers flexible scheduling, competitive pay, and the opportunity to work independently while providing essential diagnostic services.', 'full-time', 'entry', 'X-Ray', 'ARRT', true),
('Radiologic Technologist', 'Arizona', 'Seeking skilled ultrasound professionals for mobile diagnostic services across Arizona facilities. This role offers excellent work-life balance with part-time options.', 'part-time', 'mid', 'Ultrasound', 'ARDMS', true);

-- Update application status workflow - add new status options
-- First, update existing applications to use new status values
UPDATE public.applications SET status = 'new' WHERE status = 'pending';
UPDATE public.applications SET status = 'under_review' WHERE status = 'reviewing';
UPDATE public.applications SET status = 'contacted' WHERE status = 'contacted';
UPDATE public.applications SET status = 'interview' WHERE status = 'interview';

-- Add notes column to applications table for per-applicant notes
ALTER TABLE public.applications 
ADD COLUMN notes TEXT;

-- Add modality and certification to applications table to track what applicants applied for
ALTER TABLE public.applications
ADD COLUMN modality TEXT,
ADD COLUMN certification TEXT;