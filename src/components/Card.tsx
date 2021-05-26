import React, { useState, useEffect } from "react";
import AddToList from "./AddToList";
import List from "./List";
import { data } from "../utils/fakeData";

export interface IUsers {
  users: {
    id: number | string;
    name: string;
    age: number;
    image: string;
    details?: string;
  }[];
}
const Card = () => {
  //   const [user, setUser] = useState<{id:number,name:string,age:number,image:string,details:string}[]>([ //array of obj (method 2)
  const [users, setUsers] = useState<IUsers["users"]>([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <div className="row">
      <AddToList setUsers={setUsers} users={users} />
      <List users={users} />
    </div>
  );
};

export default Card;
