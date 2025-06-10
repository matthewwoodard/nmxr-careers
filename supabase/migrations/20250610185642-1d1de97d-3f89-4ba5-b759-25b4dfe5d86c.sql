
-- Add foreign key constraint to link applications.user_id to profiles.id
ALTER TABLE public.applications 
ADD CONSTRAINT fk_applications_user_id 
FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

-- Create an index on user_id for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_user_id ON public.applications(user_id);
