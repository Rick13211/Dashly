import { getSession } from "next-auth/react";

export default function getUser(){
  const session = getSession();
  const user = session?.user;
  
}