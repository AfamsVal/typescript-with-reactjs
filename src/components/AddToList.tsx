import React, { useState } from "react";
import { notification } from "antd";
import "antd/dist/antd.css";
import { IUsers as Props } from "./Card";

const openNotificationWithIcon = (
  type: string,
  message: string,
  description?: string
) => {
  if (type === "success" || type === "error")
    notification[type]({ message, description, duration: 2 });
  return;
};

interface IProps {
  setUsers: React.Dispatch<React.SetStateAction<Props["users"]>>;
  users: Props["users"];
}

// const AddToList = ({ users, setUsers }: IProps) => { // method 1
const AddToList: React.FC<IProps> = ({ users, setUsers }) => {
  interface IUser {
    user: {
      id: number | string;
      name: string;
      age: number;
      image: string;
      details: string;
    };
  }
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<IUser["user"]>({
    id: "",
    name: "",
    age: 0,
    image: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { name, age, image, details } = input;
    if (name !== "") {
      if (age) {
        if (image) {
          if (details) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setUsers([input, ...users]);
              setInput({ id: "", name: "", age: 0, image: "", details: "" });
            }, 1500);
          } else {
            openNotificationWithIcon(
              "error",
              "Input Error:",
              "More details is required!"
            );
          }
        } else {
          openNotificationWithIcon(
            "error",
            "Input Error:",
            "Image URL is required!"
          );
        }
      } else {
        openNotificationWithIcon("error", "Input Error:", "Age is required!");
      }
    } else {
      openNotificationWithIcon("error", "Input Error:", "Name is required!");
    }
  };

  return (
    <div className="col-md-8 col-sm-12 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <div className="comment-wrapper">
            <div className="row">
              <div className="col-md-6 col-12 form-group pr-md-1">
                <input
                  placeholder="Name"
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 col-12 form-group pl-md-1">
                <input
                  placeholder="Age"
                  type="number"
                  className="form-control"
                  name="age"
                  value={input.age === 0 ? "" : input.age}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 form-group">
                <input
                  placeholder="Image URL"
                  type="text"
                  className="form-control"
                  name="image"
                  value={input.image}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder=" More details here..."
                className="form-control"
                rows={3}
                name="details"
                value={input.details}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <button onClick={handleSubmit} className="btn btn-info btn-lg">
              {loading ? (
                <i className="fas fa-spin fa-spinner"></i>
              ) : (
                <i className="fas fa-plus"></i>
              )}{" "}
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToList;
