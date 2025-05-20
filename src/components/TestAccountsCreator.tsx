
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AdminUserAttributes } from "@supabase/supabase-js";

const TestAccountsCreator = () => {
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const { toast } = useToast();

  const createTestAdmin = async () => {
    setIsCreatingAdmin(true);
    try {
      // First try to find if the admin account already exists
      const { data: existingUsers } = await supabase.auth.admin.listUsers({
        page: 1,
        perPage: 10,
      });
      
      const existingAdmin = existingUsers?.users?.find((user: AdminUserAttributes) => 
        user.email === 'test-admin@example.com'
      );

      if (existingAdmin) {
        // If this fails, we'll just proceed with creation
        await supabase.auth.admin.deleteUser(existingAdmin.id).catch(console.error);
      }

      // Create the admin account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-admin@example.com",
        password: "admin123",
        options: {
          data: {
            full_name: "Test Admin"
          },
          emailRedirectTo: `${window.location.origin}/auth`
        }
      });

      if (signUpError) throw signUpError;
      
      if (!userData?.user?.id) {
        throw new Error("Failed to create user account");
      }

      // Set the admin role using RPC function
      const { error: roleError } = await supabase.rpc(
        'add_admin_role', 
        { target_user_id: userData.user.id }
      );

      if (roleError) throw roleError;
      
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
      // First try to find if the user account already exists
      const { data: existingUsers } = await supabase.auth.admin.listUsers({
        page: 1,
        perPage: 10,
      });
      
      const existingUser = existingUsers?.users?.find((user: AdminUserAttributes) => 
        user.email === 'test-user@example.com'
      );

      if (existingUser) {
        // If this fails, we'll just proceed with creation
        await supabase.auth.admin.deleteUser(existingUser.id).catch(console.error);
      }

      // Create the regular user account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-user@example.com",
        password: "user123",
        options: {
          data: {
            full_name: "Test User"
          },
          emailRedirectTo: `${window.location.origin}/auth`
        }
      });

      if (signUpError) throw signUpError;
      
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
            <strong>Important:</strong> After creating accounts, you need to verify them before logging in. For testing, you may need to disable email verification in the Supabase dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestAccountsCreator;
