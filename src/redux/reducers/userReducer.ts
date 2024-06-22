import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  // Send OTP for registration
  builder
    .addCase("SEND_OTP_FOR_REGISTRATION_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("SEND_OTP_FOR_REGISTRATION_SUCCESS", (state: any, action: any) => {
      state.loading = false;
      state.message = action.payload.message;
      state.error = null;
    })
    .addCase("SEND_OTP_FOR_REGISTRATION_FAIL", (state: any, action: any) => {
      state.loading = false;
      state.message = null;
      state.error = action.payload.error;
    });

});
