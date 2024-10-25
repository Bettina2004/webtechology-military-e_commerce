// Import the necessary modules for testing
const request = require('supertest');
const app = require('./server');

describe('POST /api/register', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'testpassword'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'User created successfully');
    expect(response.body).toHaveProperty('user');
    expect(response.body.user).toHaveProperty('username', 'testuser');
    expect(response.body.user).toHaveProperty('email', 'testuser@example.com');
  });

  it('should return an error if required fields are missing', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Missing required fields');
  });
});