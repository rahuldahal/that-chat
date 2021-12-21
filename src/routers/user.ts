import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Hello' }));
router.post('/', (req, res) =>
  res.status(201).json({ message: 'Received data!' })
);

export default router;
