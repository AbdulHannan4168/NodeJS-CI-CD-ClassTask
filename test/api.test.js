const request = require("supertest");
const { app, server } = require("../index"); // Import the server

afterAll((done) => {
  server.close(done); // Close server after tests
});

describe("GET /", () => {
  it("should return 'Hello, World!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
