
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
      // First, create the user account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-admin@example.com",
        password: "admin123",
        options: {
          data: {
            full_name: "Test Admin"
          }
        }
      });

      if (signUpError) throw signUpError;
      
      if (!userData?.user?.id) {
        throw new Error("Failed to create user account");
      }

      // Then set the admin role
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert([
          { user_id: userData.user.id, role: 'admin' }
        ]);

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
      // First, create the user account
      const { data: userData, error: signUpError } = await supabase.auth.signUp({
        email: "test-user@example.com",
        password: "user123",
        options: {
          data: {
            full_name: "Test User"
          }
        }
      });

      if (signUpError) throw signUpError;
      
      if (!userData?.user?.id) {
        throw new Error("Failed to create user account");
      }

      // Then set the user role (though this is the default)
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert([
          { user_id: userData.user.id, role: 'user' }
        ]);

      if (roleError) throw roleError;
      
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
      </div>
    </div>
  );
};

export default TestAccountsCreator;
