import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createBlogSlice, type blogSliceType } from "./blogSlice";

//creacion del estado global
const useAppStore = create<blogSliceType>()(devtools(
    (...a) => ({
        ...createBlogSlice(...a),
    })
));


export default useAppStore;