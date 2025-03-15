
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from 'lucide-react';

const PricingPlans = [
  {
    name: "Free",
    description: "Basic research tools for students and early researchers",
    price: {
      monthly: "$0",
      yearly: "$0",
    },
    features: [
      { name: "AI Writing Assistant (Limited to 20 sessions/month)", included: true },
      { name: "Journal & Conference Finder (Basic)", included: true },
      { name: "Research Gap Finder (Limited to 3 queries/day)", included: true },
      { name: "Formatting & Compliance Check (Basic styles only)", included: true },
      { name: "Plagiarism Detection (Up to 5 papers/month)", included: true },
      { name: "Community Access", included: true },
      { name: "Resume Insights", included: false },
      { name: "Mentor Matching", included: false },
      { name: "Publishing Progress Tracking", included: false },
      { name: "Unlimited AI Sessions", included: false },
    ],
    callToAction: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    description: "Advanced tools for serious researchers and professionals",
    price: {
      monthly: "$10",
      yearly: "$100",
    },
    features: [
      { name: "AI Writing Assistant (Unlimited)", included: true },
      { name: "Journal & Conference Finder (Advanced with impact metrics)", included: true },
      { name: "Research Gap Finder (Unlimited queries)", included: true },
      { name: "Formatting & Compliance Check (All journal styles)", included: true },
      { name: "Plagiarism Detection (Unlimited)", included: true },
      { name: "Community Access", included: true },
      { name: "Resume Insights", included: true },
      { name: "Mentor Matching", included: true },
      { name: "Publishing Progress Tracking", included: true },
      { name: "Unlimited AI Sessions", included: true },
    ],
    callToAction: "Start Free Trial",
    popular: true,
  },
  {
    name: "Institutional",
    description: "Enterprise solution for universities and research organizations",
    price: {
      monthly: "Contact Us",
      yearly: "Contact Us",
    },
    features: [
      { name: "AI Writing Assistant (Unlimited for all users)", included: true },
      { name: "Journal & Conference Finder (Advanced with impact metrics)", included: true },
      { name: "Research Gap Finder (Unlimited queries)", included: true },
      { name: "Formatting & Compliance Check (All journal styles + custom)", included: true },
      { name: "Plagiarism Detection (Unlimited with detailed reports)", included: true },
      { name: "Community Access", included: true },
      { name: "Resume Insights", included: true },
      { name: "Mentor Matching", included: true },
      { name: "Publishing Progress Tracking", included: true },
      { name: "Unlimited AI Sessions", included: true },
    ],
    customFeatures: [
      "Dedicated Account Manager",
      "Custom Branding",
      "API Access",
      "SSO Integration",
      "User Management Dashboard",
    ],
    callToAction: "Contact Sales",
    popular: false,
  }
];

const FAQs = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can change your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle."
  },
  {
    question: "Do you offer a student discount?",
    answer: "Yes! We offer a 50% discount for verified students. Contact our support team with your academic email address for verification."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for institutional plans."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 14-day money-back guarantee on all premium plans. If you're not satisfied, contact our support team within 14 days of purchase."
  },
  {
    question: "Can I try the premium features before paying?",
    answer: "Absolutely! We offer a 7-day free trial of our Premium plan with full access to all features. No credit card required to start."
  },
  {
    question: "Do you offer custom plans for large research teams?",
    answer: "Yes, for research teams of 10+ members, we offer custom pricing and features. Please contact our sales team for more information."
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your research journey. All plans include access to our core research tools.
          </p>
          
          <div className="mt-6">
            <Tabs 
              defaultValue="monthly" 
              value={billingCycle}
              onValueChange={setBillingCycle}
              className="inline-flex mx-auto"
            >
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">
                  Yearly
                  <span className="ml-1.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    Save 16%
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">
                    {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </span>
                  {plan.price.monthly !== "Contact Us" && (
                    <span className="text-muted-foreground ml-1">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                  
                  {plan.customFeatures && plan.customFeatures.map((feature, featureIndex) => (
                    <li key={`custom-${featureIndex}`} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.callToAction}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          
          <div className="divide-y">
            {FAQs.map((faq, index) => (
              <div key={index} className="py-4">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
