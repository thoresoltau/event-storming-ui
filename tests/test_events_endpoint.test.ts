import request from 'supertest';
import { app } from '../src/server';
import mongoose from 'mongoose';

// Connect to a test database
beforeAll(async () => {
  const url = 'mongodb://localhost:27017/eventstorming_test';
  await mongoose.connect(url);
});

// Disconnect from the test database
afterAll(async () => {
  if (mongoose.connection.db) { await mongoose.connection.db.dropDatabase(); }
  await mongoose.connection.close();
});

// Test suite for /events endpoint
describe('POST /events', () => {
  it('should create a new event and return 200', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        name: 'Test Event',
        date: new Date(),
        location: 'Test Location'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.name).toBe('Test Event');
  });

  it('should return 400 for invalid event object', async () => {
    const response = await request(app)
      .post('/events')
      .send({
        name: 'Invalid Event'
        // Missing date and location
      });
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid event object');
  });
});