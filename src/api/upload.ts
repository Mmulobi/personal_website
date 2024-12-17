import { put } from '@vercel/blob';
import { validateFile, UploadResponse } from '../config/blob';

export const uploadFile = async (file: File): Promise<UploadResponse> => {
  try {
    const validationError = validateFile(file);
    if (validationError) {
      return { success: false, error: validationError };
    }

    const response = await fetch(
      `/api/upload?filename=${encodeURIComponent(file.name)}`,
      {
        method: 'POST',
        body: file,
      }
    );

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const blob = await response.json();
    return { success: true, url: blob.url };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    };
  }
};