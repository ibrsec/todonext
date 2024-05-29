import data from "./data";
export async function GET() {
  return Response.json({ data });
}
export async function POST(request: Request) {
  const payload = await request.json();
  const newTodo = {
    id: new Date().getTime(),
    desc: payload.desc,
    completed: false,
  };
  data.push(newTodo);
  return new Response(
    JSON.stringify({ msg: "New todo is Added", success: true, newTodo }),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    }
  );
}
