import { memo, useState } from "react"

export const useMessage = (Message = 'no hay contenido') => {
        const [getmessage, setGetmessage] = useState([Message])
        const isMessage = (firstMessage = 'no se ha dado ningun valor') => {
            setGetmessage(firstMessage); 
        }

    return {
        getmessage,
        isMessage,
    }

}
