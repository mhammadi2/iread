import { GenericState, createGenericSlice } from "../../store/genericSlice";
import { Photo } from "../../types/profile";

type State = {
    data: Photo[]
}

const initialState: State = {
    data: []
}

export const photoSlice = createGenericSlice({
    name: 'photos',
    initialState: initialState as GenericState<Photo[]>,
    reducers: {}
    // empty reducer becasue we are using generic reudce
})

export const actions = photoSlice.actions;