import { User } from "firebase/auth";
import { Users } from "@/types";
import { useEffect } from "react";

interface Props {
    user: User | null
    data: Users[] | undefined
    setUserPrepared: (value: boolean) => void
    getUser: (user: Users) => void
}

export default function useCurrentUser({user, data, setUserPrepared, getUser }: Props) {

       useEffect(() => {
        if(user){
            setUserPrepared(true)
        }
        if(!data) return

        const currentUser = data[0];

        getUser(currentUser)
   }, [user, data])
   
}