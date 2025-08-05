import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, LogIn, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useNavigate, Link } from 'react-router-dom';

const VolunteerLoginPage = ({ setIsVolunteerAuthenticated }) => {
  const [email, setEmail] = useState('volunteer@dreamlight.org');
  const [password, setPassword] = useState('volunteer123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const logoUrl = "/dws-logo.jpeg"; // Updated logo path

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // SIMULATED LOGIN - Replace with actual API call to Supabase Auth
    setTimeout(() => {
      if (email === 'volunteer@dreamlight.org' && password === 'volunteer123') {
        toast({
          title: 'Login Successful!',
          description: 'Welcome to the Volunteer Hub! Redirecting...',
          className: 'bg-dws-green text-white',
        });
        setIsVolunteerAuthenticated(true);
        localStorage.setItem('isVolunteerAuthenticated', 'true');
        navigate('/volunteer-dashboard/overview');
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dws-gold-light/20 to-slate-100 p-4">
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
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
          </Link>
          <h1 className="text-3xl font-bold text-dws-gold-dark flex items-center justify-center">
            <UserCheck className="mr-2.5" /> Volunteer Login
          </h1>
          <p className="text-sm text-slate-500 mt-1">Access your Dreamlight Volunteer Hub.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="volunteer@dreamlight.org"
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
              placeholder="volunteer123"
              required
              className="mt-1 pr-10"
            />
             <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2.5 top-9 text-slate-500 hover:text-dws-gold"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          
          <Button type="submit" className="w-full bg-dws-gold hover:bg-dws-gold-dark text-dws-blue-dark text-base py-3" disabled={isLoading}>
             {isLoading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-dws-blue-dark border-t-transparent rounded-full"></motion.div>
            ) : (
              <><LogIn size={18} className="mr-2" /> Login to Hub</>
            )}
          </Button>
        </form>
        <p className="text-xs text-slate-500 text-center mt-6">
          Don't have an account? <Link to="/volunteer" className="text-dws-gold-dark hover:underline">Register here</Link>.
        </p>
        <p className="text-xs text-slate-500 text-center mt-2">
          Go back to <Link to="/" className="text-dws-gold-dark hover:underline">Homepage</Link>.
        </p>
      </motion.div>
       <p className="text-xs text-slate-500 mt-8">
        &copy; {new Date().getFullYear()} Dreamlight Welfare Society. Welcome Volunteers!
      </p>
    </div>
  );
};

export default VolunteerLoginPage;