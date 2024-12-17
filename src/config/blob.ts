import { PutBlobResult } from '@vercel/blob';

export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
export const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

export interface UploadResponse {
  success: boolean;
  url?: string;
  error?: string;
}

export const validateFile = (file: File): string | null => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return 'Invalid file type. Only JPEG, PNG and GIF images are allowed.';
  }
  
  if (file.size > MAX_FILE_SIZE) {
    return 'File size too large. Maximum size is 4MB.';
  }

  return null;
};