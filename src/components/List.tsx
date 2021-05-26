import React from "react";
import { IUsers as IList } from "./Card";

// const List = (props: IUsers) => { method 1
// const List = ({ users }: IUsers) => { method 2
const List: React.FC<IList> = ({ users }) => {
  //
  //////////
  ///////////////
  ////////////////////
  // const loadData = (): JSX.Element[] => {
  //   return users.map((user) => (
  //     <div>
  //       <h3>Hello {user.name}</h3>
  //       <div>How are you?</div>
  //     </div>
  //   ));
  // };
  // return <>{loadData()};</>;

  return (
    <div className=" my-5">
      {users.map((user) => (
        <div key={user.id} className="media col-md-8 py-5 mx-auto">
          {" "}
          <img
            src={user.image}
            alt=""
            className="d-block ui-w-100 rounded-circle"
          />
          <div className="media-body ml-5">
            <h4 className="font-weight-bold mb-4">{user.name}</h4>
            <div className="text-muted mb-4"> {user.details}</div>
            <a href="/" className="d-inline-block text-body">
              {" "}
              <strong>234</strong> <span className="text-muted">followers</span>{" "}
            </a>{" "}
            <a href="/" className="d-inline-block text-body ml-3">
              {" "}
              <strong>111</strong> <span className="text-muted">following</span>{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
