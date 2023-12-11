import React, { useState } from "react";
import "./TaskItem.css";
import { RxCross2 } from "react-icons/rx";
import { PiCheckCircleFill } from "react-icons/pi";
import { PiCheckCircleBold } from "react-icons/pi";
import { BiSolidEdit } from "react-icons/bi";
import { MdSaveAs } from "react-icons/md";

export default function TaskItem({ todo, state, dispatch }) {
  const { id, text, completed } = todo;
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(text);
  return (
    <>
      <div className="single-item">
        <div className="flex">
          <div>
            {completed ? (
              <div>
                <PiCheckCircleFill
                  onClick={() =>
                    dispatch({ type: "COMPLETED_TODO", payload: id })
                  }
                  className="icon-checked icon"
                />
              </div>
            ) : (
              <div>
                <PiCheckCircleBold
                  onClick={() =>
                    dispatch({ type: "COMPLETED_TODO", payload: id })
                  }
                  className="check-icon icon"
                />
              </div>
            )}
          </div>

          <div className="todo-text">
            {completed ? (
              <div className=" completed-todo">
                <s className="todo-text">{text}</s>
              </div>
            ) : isEdit ? (
              <form
                className="editing-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "EDITED-TODO",
                    payload: { text: editedTodo, id: id },
                  });
                  setIsEdit(false);
                }}
              >
                <label>
                  <input
                    className="editing-input"
                    type="text"
                    value={editedTodo}
                    onChange={(e) => {
                      e.preventDefault();
                      setEditedTodo(e.target.value);
                    }}
                  />
                </label>

                <button className="save-edit-btn icon" type="submit">
                  <MdSaveAs />
                </button>
              </form>
            ) : (
              // -------------------
              /* <form
                className="editing-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: "EDITED-TODO",
                    payload: { text: state.inputValue, id: id },
                  });
                  setIsEdit(false);
                }}
              >
                <label>
                  <input
                    className="editing-input"
                    type="text"
                    value={state.inputValue}
                    onChange={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: "HANDLE_INPUTS",
                        payload: e.target.value,
                      });
                    }}
                  />
                </label>

                <button className="save-edit-btn icon" type="submit">
                  <MdSaveAs />
                </button>
              </form> */
              <span className="todo-text">{text}</span>
            )}
          </div>
        </div>

        <div>
          <BiSolidEdit
            onClick={() => setIsEdit(!isEdit)}
            className="edit-icon icon"
          />
          <RxCross2
            onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
            className="dlt-icon icon"
          />
        </div>
      </div>
    </>
  );
}
