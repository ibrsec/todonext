"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Todos = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [editMode, setEditMode] = useState(false);

  const getData = async () => {
    try {
      const response = await axios("/api/todos");
      console.log("get response = ", response);
      setTodos(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async (data: { desc: string }) => {
    // const data = {
    //   desc: "Todo 10",
    // };
    try {
      const response = await axios.post("/api/todos", data);
      console.log("post response = ", response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await axios.delete("/api/todos/" + id.toString());
      console.log("delete response = ", response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const editData = async (id: number, data: { desc: string,completed:boolean }) => {
    try {
        console.log(data); 
        
      const response = await axios.put("/api/todos/" + id.toString(), data);
      console.log("edit response = ", response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSil = (id: number) => {
    deleteData(id);
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault()
    postData({
      desc: inputText,
    });
    setInputText("");
  };

  const [editInput, setEditInput] = useState("");
  
  const [todoForEdit, setTodoForEdit] = useState<ITodo>({id: 0,desc:"",completed:false});
  if (editMode) {
    return (
      <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
        <div className="text-2xl">Edit Mode</div>
        <div className="flex gap-4 items-center">
          <div className="text-lg">Edit desc:</div>
          <input
            className="rounded-md shadow-md text-lg px-2 py-1"
            type="text"
            placeholder="Enter new desc"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        </div>
        {/* <div className="flex gap-4"> */}
        {/* <div className="text-lg ">Edit completed:</div>
          <input type="checkbox" onChange={()=>setEditReady(!editReady)} />
        </div> */}
        <div className="">
          <button
            className=" text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1"
            onClick={() => {
              editData(todoForEdit?.id, 
                {desc:editInput,completed:todoForEdit?.completed },
                );
              setEditMode(false);
              setEditInput("");
            }}
            disabled={!(editInput.length > 0)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
      <div className="text-2xl">Todo List Next</div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          className="text-cl rounded-md  shadow-md px-2 py-1"
          type="text"
          placeholder="Enter Todo"
          name=""
          id=""
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className=" text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1"
          type="submit"
        >
          Add
        </button>
        <button className=" text-xl shadow-md bg-gray-600 text-white hover:bg-gray-500 rounded-md px-3 py-1"
        onClick={()=>setInputText("")} type="button">
          Clear
        </button>
      </form>
      <div className="w-5/6 flex flex-col gap-2">
        {todos?.map(
          (todo: { id: number; desc: string; completed: boolean }, index) => {
            return (
              <div
                key={index}
                className="bg-violet-500 flex justify-between items-center p-2 rounded-lg shadow-lg"
              >
                <div className=" flex gap-2">
                  <input type="checkbox" checked={todo?.completed} onChange={()=>editData(todo?.id,{...todo,completed:!todo.completed})} />
                  <div className="text-lg text-white">{todo?.desc}</div>
                </div>
                <div className=" flex gap-2 items-center">
                  <button
                    className=" text-md shadow-md bg-green-600 text-white hover:bg-green-500 rounded-md px-2 py-1"
                    onClick={() => {
                      setEditMode(true);
                      setTodoForEdit({...todo})
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className=" text-md shadow-md bg-red-600 text-white hover:bg-red-500 rounded-md px-2 py-1"
                    onClick={() => handleSil(todo?.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Todos;
