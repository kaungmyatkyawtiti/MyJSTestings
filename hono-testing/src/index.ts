import { Hono } from 'hono';
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Hello Hono!'
  }, 200);
})

app.get("/posts", c => {
  return c.json({
    message: "all posts"
  }, 200);
});

app.post("/posts", c => {
  return c.json({
    message: "created!"
  }, 201);
});

app.get('/posts/:id', c => {
  const id = c.req.param('id');
  return c.json({
    message: `This is Post ${id}`
  }, 200);
});

app.delete("/posts/:id", c => {
  const id = c.req.param("id");
  return c.json({
    message: `Post ${id} is deleted`
  }, 200);
});

// authLogic
app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'admin',
  })
)

app.get('/admin', (c) => {
  return c.json({
    message: 'You are authorized!'
  }, 200);
});

export default app;
