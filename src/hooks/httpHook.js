import { useContext } from "react";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useHttp = (httpBody, api, type) => {
  const navigate = useNavigate();
  const { auth, modal, loader, chat, setRooms } = useContext(Context);
  const { login, token } = auth;
  const { setErrMsg, setCreateChModal, setShowModal, setCreateTbModal } = modal;
  const { setMsgTrigger, msgTrigger } = chat;
  const { setIsLoading } = loader;
  const getUserData = async (token) => {
    setIsLoading(true);
    const response = await fetch(
      "https://coloby.onrender.com/api/v1/userdata",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const responseData = await response.json();
    setRooms(responseData.created_rooms);
    setIsLoading(false);
  };

  const httpFunction = async (httpBody, api, type) => {
    try {
       
      type !== "sendMessage" && setIsLoading(true);
      const response = await fetch(`${api}`, httpBody);
      const responseData = await response.json();
      console.log(responseData);
      const { access_token, user_id } = responseData;
      if (!response.ok) {
        console.log(Object.values(responseData)[0][0]);
        throw new Error(Object.values(responseData)[0][0]);
      } else if (response.ok && type === "login") {
        console.log("p");
        login(access_token, user_id);
      } else if (type === "sendMessage") {
        setMsgTrigger(!msgTrigger);
      } else if (type === "register") {
        setIsLoading(false);
        return navigate("/auth/login");
      } else if (type === "createRoom") {
        setCreateChModal(false);
        getUserData(token);
        toast.success("Room Succesfully Created!");
      } else if (type === "createTask") {
        setCreateTbModal(false);
        toast.success("Task Succesfully Created!");
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setShowModal(true);

      setErrMsg(err.message);
      console.log(err.message);
    }
  };

  const httpHandler = (e) => {
    e && e.preventDefault();

    httpFunction(httpBody, api, type);
  };
  return [httpHandler];
};