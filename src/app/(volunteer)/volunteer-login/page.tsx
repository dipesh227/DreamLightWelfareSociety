'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function VolunteerLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Redirect to volunteer portal
    window.location.href = '/volunteer-portal';
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dream-gold/10 via-dream-purple/10 to-dream-purple/20 dark:from-background dark:via-dream-purple-dark/20 dark:to-dream-purple-dark/30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >        {/* Glass Card */}
        <div className="bg-card/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/90 rounded-2xl mb-4 shadow-lg"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>            <h1 className="text-2xl font-bold text-foreground mb-2">
              Volunteer Portal
            </h1>
            <p className="text-muted-foreground text-sm">
              Welcome back to the community service platform
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">              <label htmlFor="email" className="block text-sm font-medium text-foreground/90">
              Email Address
            </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="volunteer@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">              <label htmlFor="password" className="block text-sm font-medium text-foreground/90">
              Password
            </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-12 py-3 border border-border rounded-xl bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground/80"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">                <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary/50 border-border rounded"
              />
                <label htmlFor="remember" className="ml-2 block text-sm text-foreground/80">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary hover:text-primary/80 font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </Button>

            {/* Register Link */}            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                New to volunteering? {' '}
                <a href="#" className="text-primary hover:text-primary/80 font-medium">
                  Register here
                </a>
              </p>
            </div>
          </form>          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Join our community of dedicated volunteers making a difference.
            </p>
          </div>
        </div>

        {/* Community Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-muted-foreground">
            Secure volunteer platform • Background verified members
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}