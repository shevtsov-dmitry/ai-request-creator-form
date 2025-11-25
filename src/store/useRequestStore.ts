import {create} from "zustand/react";
import {RequestPart} from "../types/RequestPart.ts";

interface RequestStoreProps {
    requestParts: RequestPart[]
}

const useRequestStore = create<RequestStoreProps>((set) => {
    requestParts: []
    addRequestPart: () => set(state => ({requestParts: state.requestParts}))
})

export default useRequestStore