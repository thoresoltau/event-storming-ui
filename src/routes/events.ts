import { Router, Request, Response } from 'express';
import Event from '../models/event';

const router = Router();

// Middleware to validate event object
const validateEvent = (req: Request, res: Response, next: Function) => {
  const { name, date, location } = req.body;
  if (!name || !date || !location) {
    return res.status(400).json({ error: 'Invalid event object' });
  }
  next();
};

// POST /events
router.post('/', validateEvent, async (req: Request, res: Response) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
