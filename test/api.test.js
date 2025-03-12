const request = require("supertest");
const app = require("../index"); // Import your Express app
let server;

beforeAll(() => {
  server = app.listen(4000); // Start the server for testing
});

afterAll((done) => {
  server.close(done); // Ensure the server closes after tests
});

describe("GET /", () => {
  it("should return 'Hello, World!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
