
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestAccountsCreator from "@/components/TestAccountsCreator";
import { useUser } from "@/contexts/UserContext";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useUser();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError(null);
    
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: `${window.location.origin}/dashboard`
          },
        });
        
        if (error) throw error;
        
        toast({
          title: "Sign up successful!",
          description: "Please check your email to confirm your account.",
        });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast({
          title: "Login successful!",
          description: "Welcome back!",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setAuthError(error.message);
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during authentication.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider: "google" | "linkedin_oidc") => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during social authentication.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Test Accounts Creator */}
            <div className="order-2 lg:order-1">
              <TestAccountsCreator />
            </div>
            
            {/* Auth Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {isSignUp ? "Create an Account" : "Sign In"}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <button
                    onClick={() => handleSocialAuth("google")}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md py-2.5 px-4 hover:bg-gray-50 transition"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>
                  
                  <button
                    onClick={() => handleSocialAuth("linkedin_oidc")}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-[#0077B5] text-white rounded-md py-2.5 px-4 hover:bg-[#006699] transition"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Continue with LinkedIn
                  </button>
                </div>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>
                
                {authError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {authError}
                  </div>
                )}
                
                <form onSubmit={handleEmailAuth} className="space-y-4">
                  {isSignUp && (
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required={isSignUp}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center items-center rounded-md bg-brand-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 transition disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {isSignUp ? "Creating Account..." : "Signing In..."}
                      </>
                    ) : (
                      <>{isSignUp ? "Create Account" : "Sign In"}</>
                    )}
                  </button>
                </form>
                
                <p className="mt-6 text-center text-sm text-gray-600">
                  {isSignUp ? "Already have an account? " : "Don't have an account? "}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="font-medium text-brand-red hover:text-red-800 transition"
                  >
                    {isSignUp ? "Sign In" : "Create One"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
