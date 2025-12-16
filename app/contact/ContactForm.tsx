'use client';

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

// Initialize EmailJS with Public Key
emailjs.init('kRxsxsISXJWAdROzB');

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  location: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact Form Component with EmailJS Integration
 * Code-split for performance optimization
 * 
 * EMAILJS CONFIGURED:
 * Service ID: service_y1xz00o
 * Template ID: template_77nhdhj
 * Public Key: kRxsxsISXJWAdROzB
 */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS integration
      await emailjs.send(
        'service_y1xz00o',
        'template_77nhdhj',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          service_type: data.serviceType,
          location: data.location || 'Not provided',
          message: data.message,
        }
      );

      toast({
        title: "Message sent!",
        description: "We'll respond within 2-4 hours.",
      });
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send",
        description: "Please try Messenger or Email above.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          placeholder="Your full name"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone <span className="text-muted-foreground">(Optional)</span>
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          autoComplete="tel"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div className="space-y-2">
        <label htmlFor="serviceType" className="text-sm font-medium text-foreground">
          Service Type <span className="text-destructive">*</span>
        </label>
        <select
          id="serviceType"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("serviceType")}
        >
          <option value="">Select a service...</option>
          <option value="home-repair">Home Repair & Maintenance</option>
          <option value="marine-rv">Marine & RV Services</option>
          <option value="emergency">Emergency Repair</option>
          <option value="consultation">General Consultation</option>
        </select>
        {errors.serviceType && (
          <p className="text-sm text-destructive">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label htmlFor="location" className="text-sm font-medium text-foreground">
          Location <span className="text-muted-foreground">(Optional)</span>
        </label>
        <Input
          id="location"
          placeholder="Orlando, FL"
          {...register("location")}
        />
        {errors.location && (
          <p className="text-sm text-destructive">{errors.location.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your project or issue..."
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

