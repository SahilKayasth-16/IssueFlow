import type { Request, Response, NextFunction } from 'express';

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
};

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err?.name === 'ValidationError') {
    const first = Object.values(err.errors)[0] as { message: string } | undefined;
    res.status(400).json({ message: first?.message ?? 'Validation error' });
    return;
  }
  if (err?.code === 11000) {
    res.status(409).json({ message: 'Email already registered' });
    return;
  }
  res.status(err?.statusCode ?? 500).json({ message: err?.message ?? 'Server error' });
};