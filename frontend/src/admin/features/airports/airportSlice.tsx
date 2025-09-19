import { createAsyncThunk , createSlice , type PayloadAction} from '@reduxjs/toolkit';
import * as api from '../../api/Airports';
import type { Airport , CreateAirportDTO , UpdateAirportDTO} from './types';

type state = {
  items: Airport[];
  loading: boolean;
  error?: string | null;
  page: number;
  pageSize: number;
  total?: number;
}

const initialState: state = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  pageSize: 10,
  total: 0
}

//  createAsyncThunk: create thunk actions that perform async API calss and dispatch pending/fullfilled/rejected actions automatically

export const loadAirports = createAsyncThunk('airports/load' , async (params: any = {} , {rejectWithValue}) => {
  try {
    const res = await api.fetchAirports(params);
   
    return res.data;
  } catch (err: any) {

    return rejectWithValue(err.response?.data.message || err.message);
  }
})

export const addAirport = createAsyncThunk('airports/add' , async (payload: CreateAirportDTO , {rejectWithValue}) => {

  try {
    const res = await api.createAirports(payload);
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data || err.message)
  }
})

export const editAirport = createAsyncThunk('airports/edit', async ({ id, data }: { id: number; data: UpdateAirportDTO }, { rejectWithValue }) => {
  try {
    const res = await api.updateAirports(id, data);
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

export const removeAirport = createAsyncThunk('airports/remove', async (id: number, { rejectWithValue }) => {
  try {
    await api.deleteAirports(id);
    return id;
  } catch (err: any) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

//  The slice handles these states and updates items , loading and error
const slice = createSlice({
  name: 'airports',
  initialState,
  reducers: {

    setPage(state , action: PayloadAction<number>) {
      state.page = action.payload
    },
    setPageSize(state , action: PayloadAction<number>) {
      state.pageSize = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadAirports.pending , (s) => ({ ...s , loading: true, error: null}))
      .addCase(loadAirports.fulfilled , (s , action) => {
        s.loading = false;
        console.log(s.items)
        // api returns { items , page , pageSize , total , totalpage , }
        s.items = action.payload.items;
        s.page = action.payload.page;
        s.pageSize = action.payload.pageSize;
        s.total = action.payload.total;
      })
      .addCase(loadAirports.rejected , ( s , action) => {
        s.loading = false;
        s.error = String(action.payload || action.error.message);
      })

      .addCase(addAirport.pending , (s) => ({...s , loading: true , error: null}))
      .addCase(addAirport.fulfilled , (s , action) => {
        s.loading = false;
        //  insert at top
        s.items.unshift(action.payload.items);
      })
      .addCase(addAirport.rejected , (s , action) => {
        s.loading = false;
        s.error = JSON.stringify(action.payload);
      })

      .addCase(editAirport.pending , (s) => ({ ...s , loading: true , error: null}))
      .addCase(editAirport.fulfilled , (s , action) => {
        s.loading = false;
        const idx = s.items.findIndex((a) => a.id === action.payload.id);
        if (idx >= 0) s.items[idx] = action.payload.items;
      })
      .addCase(editAirport.rejected , (s , action) => {
        s.loading = false;
        s.error = JSON.stringify(action.payload);
      })

      .addCase(removeAirport.pending , (s) => ({ ...s , loading: true , error: null}))
      .addCase(removeAirport.fulfilled , (s , action) => {
        s.loading = false;
        s.items = s.items.filter((a) => a.id !== action.payload);
      })
      .addCase(removeAirport.rejected , (s , action) => {
        s.loading = false;
        s.error = JSON.stringify(action.payload)
      })
  }
})

export const { setPage , setPageSize} = slice.actions;
export default slice.reducer;