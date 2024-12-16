import { useState } from 'react';
import { submitContactForm } from '../services/api';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactFormError {
  field: keyof ContactForm;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<ContactFormError | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData: ContactForm) => {
    try {
      setIsSubmitting(true);
      setError(null);
      await submitContactForm(formData);
      setSuccess(true);
    } catch (err: any) {
      setError({
        field: err.response?.data?.field || 'general',
        message: err.response?.data?.message || 'Failed to submit form'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    success,
    handleSubmit
  };
};