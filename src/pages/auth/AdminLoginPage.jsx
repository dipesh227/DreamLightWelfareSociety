
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';

const AdminLoginPage = ({ setIsAdminAuthenticated }) => {
  const [email, setEmail] = useState('admin@dreamlight.org');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/d2bfdf7cdd6c053e918e6d40f2ee77c1.jpg";


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // SIMULATED LOGIN - Replace with actual API call to Supabase Auth
    setTimeout(() => {
      if (email === 'admin@dreamlight.org' && password === 'password123') {
        toast({
          title: 'Login Successful!',
          description: 'Welcome back, Admin! Redirecting to dashboard...',
          className: 'bg-green-600 text-white',
        });
        setIsAdminAuthenticated(true);
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        toast({
          title: 'Login Failed',
          description: 'Invalid email or password. Please try again.',
          variant: 'destructive',
        });
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dream-purple-lighter to-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <motion.img 
              src={logoUrl} 
              alt="Dreamlight Logo" 
              className="h-20 w-auto mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </Link>
          <h1 className="text-3xl font-bold text-dream-purple-dark flex items-center justify-center">
            <Lock className="mr-2.5" /> Admin Login
          </h1>
          <p className="text-sm text-slate-500 mt-1">Access the Dreamlight Admin Panel.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@dreamlight.org"
              required
              className="mt-1"
            />
          </div>
          <div className="relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password123"
              required
              className="mt-1 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-9 text-slate-500 hover:text-dream-purple"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          <Button type="submit" className="w-full gradient-bg text-white text-base py-3" disabled={isLoading}>
            {isLoading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></motion.div>
            ) : (
              <><LogIn size={18} className="mr-2" /> Login</>
            )}
          </Button>
        </form>
        <p className="text-xs text-slate-500 text-center mt-6">
          Forgot your password? <Link to="#" className="text-dream-purple hover:underline">Reset it here</Link>.
        </p>
         <p className="text-xs text-slate-500 text-center mt-2">
          Go back to <Link to="/" className="text-dream-purple hover:underline">Homepage</Link>.
        </p>
      </motion.div>
      <p className="text-xs text-slate-500 mt-8">
        &copy; {new Date().getFullYear()} Dreamlight Welfare Society. For authorized personnel only.
      </p>
    </div>
  );
};

export default AdminLoginPage;
