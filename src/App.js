import "./App.css";
import React, { useContext, useEffect } from "react";
import { Context } from "./context/context";
import { Routes, Route } from "react-router-dom";
import Assigned from "./taskboard/assignedToMe";
import Overview from "./taskboard/overview";
import Analysis from "./taskboard/analysis/analysis";
import Requests from "./taskboard/requests";
import Dashboard from "./dashboard/dashboard";
import Notifications from "./notifications/notifications";
import Channels from "./rooms/channels";
import Sidebar from "./sidebar";
import Chat from "./rooms/chats";
import Profile from "./profile/profile";
import Spinner from "./shared/spinner";
import NotifModal from "./shared/notifModal";
import Toast from "./shared/toast";
import TaskBoard from "./taskboard/taskboard";
import ActionModal from "./shared/actionModal";
import Login from "./authentication/login/Login";
import Signup from "./authentication/signup/Signup";
import LandingPage from "./landingPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import TextEditor from "./shared/textEditor";
import "./landingpage.css";

function App() {
  const { auth } = useContext(Context);
  const { token } = auth;

  return (
    <>
      <ActionModal />
      <NotifModal />
      <Spinner />
      <Toast />
        <GoogleOAuthProvider clientId='668444211742-f4kiimq957krf5t62hmbkjgo56ejpo9k.apps.googleusercontent.com'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/editor" element={<TextEditor />} />

        <Route path="/app" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/notifications" element={<Notifications />} />
          <Route path="/app/profile" element={<Profile />} />
          <Route path="/app/profile" element={<Profile />} />
          <Route path="/app/rooms/:name" element={<Channels />} />
          <Route path="/app/chat" element={<Chat />} />
          <Route path="/app/taskboard" element={<TaskBoard />}>
            
            <Route index element={<Overview />} />
            <Route path="/app/taskboard/overview" element={<Overview />} />
            <Route
              path="/app/taskboard/assigned_to_me"
              element={<Assigned />}
            />
            <Route path="/app/taskboard/request" element={<Requests />} />
            <Route path="/app/taskboard/analysis" element={<Analysis />} />
          </Route>
        </Route>
      </Routes>
         </GoogleOAuthProvider>
    </>
  );
}

export default App;
