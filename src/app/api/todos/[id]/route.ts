import data from "../data";
export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
  ) {
      const body = await request.json(); 
      const {desc,completed} = body;
      const index = data.findIndex((todo) => todo.id === parseInt(params.id));
      data[index].desc = desc;
      data[index].completed = completed;
      return Response.json(data[index])
  } 
   
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
  ) {
    
      const index = data.findIndex((todo) => todo.id === parseInt(params.id));
      data.splice(index, 1);
      return Response.json(data[index])
  
  
  
  
  }
  