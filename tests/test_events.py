import request from 'supertest';
import { app } from '../src/server';

describe('POST /events', () => {
  it('should create a new event and return 200', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        name: 'Event Name',
        date: '2023-12-31',
        location: 'Event Location'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('should return 400 for invalid event object', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        name: 'Event Name'
      });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid event object');
  });
});