-- Update all active job titles to "Radiologic Technologist"
UPDATE public.jobs 
SET title = 'Radiologic Technologist'
WHERE is_active = true AND title != 'Radiologic Technologist';