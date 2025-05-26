
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestAccountsCreator = () => {
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const { toast } = useToast();

  const createTestAdmin = async () => {
    setIsCreatingAdmin(true);
    try {
      // Create the admin account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-admin@example.com",
        password: "admin123",
        options: {
          data: {
            full_name: "Test Admin"
          },
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (signUpError) {
        // If user already exists, that's fine
        if (signUpError.message.includes('already registered')) {
          toast({
            title: "Admin account already exists",
            description: "Email: test-admin@example.com, Password: admin123",
          });
          return;
        }
        throw signUpError;
      }
      
      if (!userData?.user?.id) {
        throw new Error("Failed to create user account");
      }

      // Wait a moment for the user to be fully created
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set the admin role using RPC function
      const { error: roleError } = await supabase.rpc(
        'add_admin_role', 
        { target_user_id: userData.user.id }
      );

      if (roleError) {
        console.error("Role assignment error:", roleError);
        // Don't throw here - the user was created successfully
        toast({
          title: "Admin account created",
          description: "Email: test-admin@example.com, Password: admin123. Note: Admin role assignment may need to be done manually.",
        });
        return;
      }
      
      toast({
        title: "Admin account created",
        description: "Email: test-admin@example.com, Password: admin123",
      });
    } catch (error: any) {
      console.error("Error creating admin account:", error);
      toast({
        title: "Error creating admin account",
        description: error.message || "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsCreatingAdmin(false);
    }
  };

  const createTestUser = async () => {
    setIsCreatingUser(true);
    try {
      // Create the regular user account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-user@example.com",
        password: "user123",
        options: {
          data: {
            full_name: "Test User"
          },
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (signUpError) {
        // If user already exists, that's fine
        if (signUpError.message.includes('already registered')) {
          toast({
            title: "User account already exists",
            description: "Email: test-user@example.com, Password: user123",
          });
          return;
        }
        throw signUpError;
      }
      
      if (!userData?.user?.id) {
        throw new Error("Failed to create user account");
      }
      
      toast({
        title: "User account created",
        description: "Email: test-user@example.com, Password: user123",
      });
    } catch (error: any) {
      console.error("Error creating user account:", error);
      toast({
        title: "Error creating user account",
        description: error.message || "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsCreatingUser(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h3 className="text-lg font-medium mb-4">Create Test Accounts</h3>
      <div className="space-y-4">
        <div>
          <Button 
            onClick={createTestAdmin}
            disabled={isCreatingAdmin}
            className="w-full"
          >
            {isCreatingAdmin ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Admin Account...
              </>
            ) : (
              "Create Test Admin Account"
            )}
          </Button>
          <p className="text-xs text-gray-500 mt-1">
            Email: test-admin@example.com, Password: admin123
          </p>
        </div>
        
        <div>
          <Button 
            onClick={createTestUser}
            disabled={isCreatingUser}
            className="w-full"
          >
            {isCreatingUser ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating User Account...
              </>
            ) : (
              "Create Test User Account"
            )}
          </Button>
          <p className="text-xs text-gray-500 mt-1">
            Email: test-user@example.com, Password: user123
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-amber-600">
            <strong>Important:</strong> If accounts already exist, just use the credentials above to log in. Email verification is disabled for testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestAccountsCreator;
