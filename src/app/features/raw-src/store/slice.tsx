import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/types/reducer";
import { ZingDataXmlState } from "app/types/ZingDataXml";

const initialState: ZingDataXmlState = {
    fetching: false,
    fetched: false,
    data: '',
}

const ZingDataXMLSlice = createSlice({
    name: 'zing-data-xml',
    initialState,
    reducers: {
        fetchZingDataXML(state, action: PayloadAction<string>) {
            state.fetching = true;
            state.fetched = false;
        },
        fetchZingDataXMLDone(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.fetched = true;
            state.data = action.payload;
        }
    }
})

// Action
export const fetchZingDataXML = ZingDataXMLSlice.actions.fetchZingDataXML;
export const fetchZingDataXMLDone = ZingDataXMLSlice.actions.fetchZingDataXMLDone;

// Selector
export const getZingDataXML = (state: RootState) => state.zingDataXml.data;

// Reducer
const ZingDataXMLReducer = ZingDataXMLSlice.reducer;
export default ZingDataXMLReducer;
