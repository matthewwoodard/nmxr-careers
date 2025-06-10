
-- Check what the current check constraint allows for status
SELECT conname, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'public.applications'::regclass 
AND contype = 'c';

-- Also check current applications
SELECT status, COUNT(*) as count 
FROM public.applications 
GROUP BY status 
ORDER BY status;
