import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { SEMINAR, SeminarState } from "../typs";

const fetchUrl = "http://localhost:8000";
const jwt = localStorage.localJWT;

const initialState: SeminarState = {
  selectedSeminar: {
    id: 0,
    name: "",
    method: "",
    affiliation: "",
    staff: "",
    place: "",
    start_date: "",
    end_date: "",
    start_application_date: "",
    end_application_date: "",
    number_of_attendees: 0,
    capacity: 0,
    application_page: "",
    application_list: "",
    audience_page: "",
    event_page: "",
    is_reserved: false,
    invitation_mail: "",
    remaind_mail: "",
    viewing_guid_mail: "",
    thank_you_mail: "",
    creater: 0,
    created_at: "",
    updated_at: "",
  },
  editedSeminar: {
    id: 0,
    name: "",
    method: "",
    affiliation: "",
    staff: "",
    place: "",
    start_date: "",
    end_date: "",
    start_application_date: "",
    end_application_date: "",
    number_of_attendees: 0,
    capacity: 0,
    application_page: "",
    application_list: "",
    audience_page: "",
    event_page: "",
    is_reserved: false,
    invitation_mail: "",
    remaind_mail: "",
    viewing_guid_mail: "",
    thank_you_mail: "",
    creater: 0,
    created_at: "",
    updated_at: "",
  },
  seminars: [
    {
      id: 0,
      name: "",
      method: "",
      affiliation: "",
      staff: "",
      place: "",
      start_date: "",
      end_date: "",
      start_application_date: "",
      end_application_date: "",
      number_of_attendees: 0,
      capacity: 0,
      application_page: "",
      application_list: "",
      audience_page: "",
      event_page: "",
      is_reserved: false,
      invitation_mail: "",
      remaind_mail: "",
      viewing_guid_mail: "",
      thank_you_mail: "",
      creater: 0,
      created_at: "",
      updated_at: "",
    },
  ],
};

export const fetchAsyncGetSeminars = createAsyncThunk(
  "seminar/getSeminars",
  async () => {
    const response = await axios.get<SEMINAR[]>(`${fetchUrl}/api/seminar/`, {
      headers: {
        Authorization: `JWT ${jwt}`,
      },
    });
    return response.data;
  }
);

export const seminarSlice = createSlice({
  name: "seminar",
  initialState,
  reducers: {
    selectSeminar: (state, action: PayloadAction<SEMINAR>) => {
      state.selectedSeminar = action.payload;
    },
    editSeminar: (state, action: PayloadAction<SEMINAR>) => {
      state.editedSeminar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetSeminars.fulfilled, (state, action) => {
      return {
        ...state,
        seminars: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetSeminars.rejected, (state, action) => {
      window.location.href = "/";
    });
  },
});

export const { selectSeminar, editSeminar } = seminarSlice.actions;

export const selectSelectedSeminar = (state: RootState) =>
  state.seminar.selectedSeminar;
export const selectEditedSeminar = (state: RootState) =>
  state.seminar.editedSeminar;
export const selectSeminars = (state: RootState) => state.seminar.seminars;

export default seminarSlice.reducer;
