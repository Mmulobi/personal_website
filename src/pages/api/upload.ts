import { put } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const filename = req.query.filename as string;
    
    if (!filename) {
      return res.status(400).json({ error: 'Filename is required' });
    }

    const blob = await put(filename, req, {
      access: 'public',
    });

    res.status(200).json(blob);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}