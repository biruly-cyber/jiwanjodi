
// import { SERVER_URL } from "@/serverConfig";
// import axios from "axios";
// // import { AppDispatch } from "../store";
// import { toast } from "@/components/ui/use-toast";

// // Create new account handler -- Working
// export const registrationAction =
//   (email:string, password:string) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch({
//         type: "SEND_OTP_FOR_REGISTRATION_REQUEST",
//       });

//       const { data } = await axios.post(
//         `${SERVER_URL}/user/new`,
//         {email, password}
//       );

//       dispatch({
//         type: "SEND_OTP_FOR_REGISTRATION_SUCCESS",
//         payload: { message: data?.message },
//       });
//       toast({
//         title: "Success",
//         description: data?.message,
//         variant: "default",
//       });
//     } catch (e: any) {
//       dispatch({
//         type: "SEND_OTP_FOR_REGISTRATION_FAIL",
//         payload: { error: e?.response?.data?.message || e?.message },
//       });
//       toast({
//         title: "Error",
//         description: e?.response?.data?.message || e?.message,
//         variant: "destructive",
//       });
//     }
//   };
