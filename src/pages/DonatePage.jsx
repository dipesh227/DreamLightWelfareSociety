import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, DollarSign, Gift, Users, CheckCircle, Info, BookOpen, Stethoscope, Droplets, Briefcase, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider'; 
import { toast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';

const DonationImpactCard = ({ amount, impact, icon: Icon, iconColor }) => (
  <motion.div 
    className="bg-primary/10 p-4 rounded-lg text-center flex items-center space-x-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`p-2 rounded-full ${iconColor.replace('text-', 'bg-')}/20`}>
      <Icon className={`h-6 w-6 ${iconColor}`} />
    </div>
    <div>
      <p className="text-xl font-bold text-primary">${amount}</p>
      <p className="text-xs text-slate-600 text-left">{impact}</p>
    </div>
  </motion.div>
);

const FundTargetProgress = ({ targetName, current, target, color }) => {
  const percentage = Math.min((current / target) * 100, 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1 text-sm">
        <span className="font-semibold text-secondary-foreground">{targetName}</span>
        <span className={`font-bold ${color}`}>${current.toLocaleString()} / ${target.toLocaleString()}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <motion.div 
          className={`h-3 rounded-full ${color === 'text-secondary' ? 'bg-secondary' : color === 'text-blue-600' ? 'bg-blue-600' : color === 'text-green-600' ? 'bg-green-600' : 'bg-primary'}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%`}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-1 text-right">{percentage.toFixed(0)}% Funded</p>
    </div>
  );
};


const DonatePage = () => {
  const location = useLocation();
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationFrequency, setDonationFrequency] = useState('monthly');
  const [selectedProgram, setSelectedProgram] = useState('general');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const program = queryParams.get('program');
    if (program) {
      setSelectedProgram(program);
    }
  }, [location]);


  const predefinedAmounts = [25, 50, 100, 250];

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Generosity!",
      description: `Your ${donationFrequency} donation of $${donationAmount} to ${selectedProgram === 'general' ? 'our general fund' : selectedProgram} is deeply appreciated. (Payment processing is simulated).`,
      className: "bg-primary text-white border-secondary",
      duration: 7000,
    });
  };
  
  const fundTargets = [
    { name: "Education for All Children", current: 12500, target: 25000, color: "text-primary" },
    { name: "Clean Water Access Initiative", current: 8200, target: 15000, color: "text-blue-600" },
    { name: "Healthcare Support Fund", current: 18000, target: 30000, color: "text-green-600" },
    { name: "Emergency Relief Operations", current: 5500, target: 10000, color: "text-secondary" },
  ];

  const impactExamples = [
    { amount: 25, impact: "Provides school supplies for a child for one month.", icon: BookOpen, iconColor: "text-primary" },
    { amount: 50, impact: "Offers a family access to clean water solutions for six months.", icon: Droplets, iconColor: "text-blue-600" },
    { amount: 100, impact: "Supports a health check-up for 5 individuals in a remote community.", icon: Stethoscope, iconColor: "text-green-600" },
    { amount: 250, impact: "Helps fund a vocational training module for one aspiring youth.", icon: Briefcase, iconColor: "text-secondary" },
  ];

  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Your Gift Makes a Difference"
        subtitle="Every contribution, no matter the size, empowers us to continue our vital work. Join us in creating lasting change and building brighter futures."
        icon={Heart}
        gradientFrom="from-primary"
        gradientTo="to-dream-logo-blue-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          
          <motion.div 
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-secondary-foreground mb-8 text-center md:text-left">Make Your Donation</h2>
            <form onSubmit={handleDonationSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Choose Amount (USD)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {predefinedAmounts.map(amount => (
                    <Button 
                      key={amount}
                      type="button"
                      variant={donationAmount === amount ? "default" : "outline"}
                      onClick={() => setDonationAmount(amount)}
                      className={`w-full py-3 text-base rounded-lg transition-all duration-200 ${donationAmount === amount ? 'gradient-bg text-white shadow-md' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6 text-slate-500" />
                  <Slider
                    defaultValue={[50]}
                    max={500}
                    step={5}
                    value={[donationAmount]}
                    onValueChange={(value) => setDonationAmount(value[0])}
                    className="flex-grow"
                  />
                  <input 
                    type="number" 
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="w-24 p-2 border border-slate-300 rounded-md text-center font-semibold text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Donation Frequency</label>
                <div className="flex space-x-3">
                  {['one-time', 'monthly'].map(freq => (
                    <Button
                      key={freq}
                      type="button"
                      variant={donationFrequency === freq ? "default" : "outline"}
                      onClick={() => setDonationFrequency(freq)}
                      className={`flex-1 py-3 text-base rounded-lg capitalize transition-all duration-200 ${donationFrequency === freq ? 'gradient-bg text-white shadow-md' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
                    >
                      {freq.replace('-', ' ')}
                    </Button>
                  ))}
                </div>
                {donationFrequency === 'monthly' && (
                  <p className="text-xs text-slate-500 mt-2 flex items-center">
                    <Info className="h-3 w-3 mr-1.5 text-primary"/> Monthly donations provide sustainable support for our ongoing projects.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-slate-700 mb-2">Designate Your Gift (Optional)</label>
                <select 
                  id="program"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="general">General Fund (Where most needed)</option>
                  <option value="education">Education Empowerment</option>
                  <option value="healthcare">Community Health Initiatives</option>
                  <option value="water">Clean Water & Sanitation</option>
                  <option value="livelihood">Sustainable Livelihoods</option>
                  <option value="environment">Environmental Conservation</option>
                  <option value="emergency">Emergency Relief</option>
                </select>
              </div>
              
              <Button type="submit" size="lg" className="w-full gradient-bg text-white text-lg py-3.5 rounded-lg hover:opacity-90 shadow-lg">
                <Heart className="mr-2 h-5 w-5" /> Donate ${donationAmount} {donationFrequency === 'monthly' ? 'Monthly' : 'Now'}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                All donations are securely processed. You will receive a receipt via email. Dreamlight Welfare Society is a registered non-profit organization.
              </p>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-6 text-center">See Your Impact (Examples)</h3>
              <div className="space-y-3">
                {impactExamples.map(ex => <DonationImpactCard key={ex.amount} {...ex} />)}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-6 text-center">Other Ways to Give</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Gift className="h-6 w-6 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-700">Corporate Partnerships</h4>
                    <p className="text-sm text-slate-600">Align your brand with a cause. Contact us for partnership opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-700">Fundraise for Us</h4>
                    <p className="text-sm text-slate-600">Start your own campaign to support our projects. We'll provide resources!</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-logo-blue/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-12 text-center">Current Fundraising Goals</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {fundTargets.map(fund => (
              <FundTargetProgress key={fund.name} {...fund} />
            ))}
          </div>
           <p className="text-center text-sm text-slate-600 mt-10">
            These are some of our priority areas. Your contribution to the General Fund allows us to allocate resources where they are most urgently needed.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-500"/>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Your Trust, Our Commitment</h2>
            <p className="text-lg md:text-xl mb-8 text-slate-700 max-w-2xl mx-auto">
                We are dedicated to transparency and ensuring your donation makes the maximum possible impact. 95% of all donations go directly to our programs.
            </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;