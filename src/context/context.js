import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const Context = createContext();

const ContextProvider = (props) => {
  const [createChModal, setCreateChModal] = useState(false);
  const [createTbModal, setCreateTbModal] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");
  const [tokenExpDate, setTokenExpDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [roomMsgs, setRoomMsgs] = useState([]);
  const [msgTrigger, setMsgTrigger] = useState(false);
  const [showChatDate, setShowChatDate] = useState(false);
  const [chatDate, setChatDate] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);
  const [roomsList, setRoomsList] = useState([]);
  const [numberOfRooms, setNumberOfRooms] = useState(0)
  const [activeRoomId, setActiveRoomId] = useState(0);
  const [activeTasks, setActiveTasks] = useState([]);
  const [notifs, setNotifs] = useState([])
  const [activeRoom, setActiveRoom] = useState("");
  const [currUser, setCurrUser] = useState(null)
  const [viewTaskModal, setViewTaskModal] = useState(false)
  const [taskInView, setTaskInView] = useState({})
  const [taskOptionsView, setTaskOptionsView] = useState(false)
  const [taskUpdate, setTaskUpdate] = useState({})
  const [editorText, setEditorText] = useState(taskInView?.description)


  const navigate = useNavigate();

 
  const login = useCallback((token, userId, tokenDuration) => {
    setToken(token);
    setUsername(username);
    setUserId(userId);
    getUserData();
   

    const tokenExpirationTime =
      tokenDuration || new Date().getTime() + 604800000;
    setTokenExpDate(tokenExpirationTime);
    localStorage.setItem(
      "userData",
      JSON.stringify({ accessToken: token, tokenExpDate: tokenExpirationTime })
    );
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage !== null) {
      return navigate(lastVisitedPage);
    }else if (lastVisitedPage === null ){
     
      console.log(lastVisitedPage);
      return navigate("/app/dashboard");
    }
    // const lastTaskState = JSON.parse(localStorage.getItem("lastTaskState"));
    // if (lastTaskState) {
    //   localStorage.removeItem("lastTaskState");
    //   dispatch({ type: lastTaskState });
    // }
     
   
  });
  const getUserData = async () => {
    if (token) {
   
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
      setCurrUser(responseData.user)

      const storedRoomsNumber = localStorage.getItem("numberOfRooms");
      if(!storedRoomsNumber || responseData.created_rooms.length !== Number(storedRoomsNumber)){
        localStorage.setItem("numberOfRooms", responseData.created_rooms.length);
      }
      localStorage.setItem(
        "roomSlugs",
        JSON.stringify(responseData.created_rooms.map((room)=>{
          return room.slug
        }) )
      );
      
       setRoomsList(responseData.created_rooms);
    }
  };

  const logout = useCallback(async () => {
    setToken(null);
    setTokenExpDate(null);
    setShowActionModal(false);
    setRoomsList([])
    localStorage.removeItem("userData");
    localStorage.removeItem("lastVisitedPage");
    localStorage.removeItem("roomSlugs");
    return navigate("/auth/login");
  });

  // persist login after refresh
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.accessToken &&
      storedData.tokenExpDate > new Date().getTime()
    ) {
      login(storedData.accessToken, storedData.userId, tokenExpDate);
    } else {
      //to be implemented, user must sign in again
    }
  }, [token]);

  // auto-logout after token expires
  useEffect(() => {
    let timeoutId;
    if (tokenExpDate) {
      const minutesLeft = tokenExpDate - new Date().getTime();
      timeoutId = setTimeout(logout, minutesLeft);
    } else {
      clearTimeout(timeoutId);
    }
  }, [tokenExpDate, logout]);


  useEffect(()=>{
    if(roomsList.length >= 1 ){
      getRoomTasks()
      getNotif()
    }
  }, [activeRoomId, roomsList])

   
const updateX=()=>{
  const storedData = JSON.parse(localStorage.getItem("userData"));
  console.log(storedData.accessToken)
  console.log(roomsList);
}
const getRoomTasks = async()=>{
  const roomSlugs = JSON.parse(localStorage.getItem("roomSlugs"));
  console.log(roomSlugs, activeRoomId);
  const response = await fetch(`https://coloby.onrender.com/api/v1/room/${roomSlugs[activeRoomId]}/tasks/`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  } 
  })
  const responseData = await response.json()
  setActiveTasks(responseData)
}



const getNotif = async()=>{
try{
  const response = await fetch('https://coloby.onrender.com/api/v1/notifications/', {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
  if(response.ok){
    const responseData = await response.json()
    setNotifs(responseData)

  }
}catch(err){
    console.log(err.message);
    return;
}
}

  // taskboard subsection navigation
  const initialState = {
    overview: {
      isActive: true,
    },
    assigned: {
      isActive: false,
    },
    requests: {
      isActive: false,
    },
    analysis: {
      isActive: false,
    },
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "OVERVIEW": {
        return {
          ...state,
          overview: { isActive: true },
          assigned: { isActive: false },
          requests: { isActive: false },
          analysis: { isActive: false },
        };
      }
      case "ASSIGNED": {
        return {
          ...state,
          overview: { isActive: false },
          assigned: { isActive: true },
          requests: { isActive: false },
          analysis: { isActive: false },
        };
      }
      case "REQUESTS": {
        return {
          ...state,
          overview: { isActive: false },
          assigned: { isActive: false },
          requests: { isActive: true },
          analysis: { isActive: false },
        };
      }
      case "ANALYSIS": {
        return {
          ...state,
          overview: { isActive: false },
          assigned: { isActive: false },
          requests: { isActive: false },
          analysis: { isActive: true },
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const taskboardReducerDispatch = dispatch;

  return (
    <Context.Provider
      value={{
        auth: {
          token,
          setToken,
          setUsername,
          userId,
          login,
          logout,
          username,
        },

        modal: {
          createChModal,
          setCreateChModal,
          showModal,
          setShowModal,
          errMsg,
          setErrMsg,
          createTbModal,
          setCreateTbModal,
          showActionModal,
          setShowActionModal,
          viewTaskModal,
          setViewTaskModal
        },

        chat: {
          roomMsgs,
          setRoomMsgs,
          msgTrigger,
          setMsgTrigger,
          showChatDate,
          setShowChatDate,
          chatDate,
          setChatDate,
        },

        taskBoard: {
          state,
          taskboardReducerDispatch,
          activeRoomId,
          setActiveRoomId,
          activeTasks,
          setActiveTasks,
          taskInView,
          setTaskInView,
          taskOptionsView, 
          setTaskOptionsView,
          taskUpdate,
          setTaskUpdate
        },

        loader: {
          isLoading,
          setIsLoading,
        },

        rooms:{
          roomsList,
          setRoomsList,
          activeRoom,
          setActiveRoom,
        },
        notifications:{
          notifs,
          setNotifs
        },
        user:{
          currUser
        },
        textEditorContent:{
          editorText,
          setEditorText
        },
        updateX
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
