import { GIAM, TANG } from "../constants/numberConstant";

let initialState = {
  number: 0,
};

export let numberReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TANG: {
      state.number += payload;
      return { ...state }; //clone chỉ đc 1 lớp , nếu initialState có thêm lớp đối tượng thì không được , cách fix : dùng lodash deep copy hoặc dùng object convert qua json
    }
    case GIAM: {
      state.number -= payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
