import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Input, Button, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
function TodoList() {
  // 输入框值
  const [searchValue, setSearchValue] = useState("");
  // 待办列表
  const [todoList, setTodoList] = useState<
    { id: number; content: string; status: boolean }[]
  >([]);
  //展示用的列表
  const [showTodoList, setShowTodoList] = useState<
    { id: number; content: string; status: boolean }[]
  >([]);

  /** 输入框改变时 */
  const searchValueChangeHandler = (value: string) => {
    setSearchValue(value);
    setShowTodoList(
      todoList.filter((todoItem) => {
        return todoItem.content.includes(value);
      })
    );
  };

  /** 添加待办事项 */
  const addTodoHandler = () => {
    let newTodoList = [
      ...todoList,
      {
        id: Math.random(),
        content: searchValue,
        status: false,
      },
    ];
    setTodoList(newTodoList);
    setShowTodoList(newTodoList);
    setSearchValue("");
  };
  /** 复选框 */
  const todoItemStatusChangeHandler = (e: CheckboxChangeEvent, id: number) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            status: e.target.checked,
          };
        } else {
          return todoItem;
        }
      })
    );
  };

  /** 删除todo */
  const delTodoItemHandler = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Card
        className="w-[40rem] mx-auto mt-[5rem]"
        hoverable
        title={
          <div className="flex justify-between items-center">
            {/* 输入框 */}
            <Input
              value={searchValue}
              placeholder="输入待办事项"
              onChange={(e) => {
                searchValueChangeHandler(e.target.value);
              }}
            />
            <Button
              type="primary"
              onClick={addTodoHandler}
              style={{ marginLeft: "20px" }}
            >
              添加
            </Button>
          </div>
        }
      >
        {/* 待办列表 */}
        <div className="h-[30rem] overflow-y-auto pr-5">
          {showTodoList.map((todoItem) => {
            return (
              <div
                key={todoItem.id}
                className="p-5 border-[1px] border-solid border-[#ccc] rounded flex justify-between items-center"
              >
                <Checkbox
                  checked={todoItem.status}
                  onChange={(e) => {
                    todoItemStatusChangeHandler(e, todoItem.id);
                  }}
                >
                  {todoItem.content}
                </Checkbox>
                <Button
                  onClick={() => delTodoItemHandler(todoItem.id)}
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                />
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}

export default TodoList;
