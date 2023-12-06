import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: false,
  error: undefined,
};

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch('http://localhost:3001/api/v1/greetings');
  const data = await response.json();
  return data.message;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
