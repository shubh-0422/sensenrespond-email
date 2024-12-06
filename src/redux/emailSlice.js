import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    subjectA: "",
    subjectB: "",
    previewText: "",
  },
  reducers: {
    updateSubjectA: (state, action) => {
      state.subjectA = action.payload;
    },
    updateSubjectB: (state, action) => {
      state.subjectB = action.payload;
    },
    updatePreviewText: (state, action) => {
      state.previewText = action.payload;
    },
  },
});

export const { updateSubjectA, updateSubjectB, updatePreviewText } = emailSlice.actions;

export default emailSlice.reducer;
