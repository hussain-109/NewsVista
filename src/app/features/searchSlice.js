import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchText:"" ,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    removeText: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.Text = ""
    },
    putText: (state, action) => {
      state.searchText = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeText, putText } = searchSlice.actions

export default searchSlice.reducer