import {
  SAN_PHAM_CHI_TIET,
  THAY_DOI_SO_LUONG,
  THEM_GIO_HANG,
} from "../constant/gioHangConstant";

export const sanPhamChiTietAction = (value) => {
  return {
    type: SAN_PHAM_CHI_TIET,
    payload: value,
  };
};

export const themGioHangAction = (value) => {
  return {
    type: THEM_GIO_HANG,
    payload: value,
  };
};

export const thayDoiSoLuongAction = (value) => {
  return {
    type: THAY_DOI_SO_LUONG,
    payload: value,
  };
};
