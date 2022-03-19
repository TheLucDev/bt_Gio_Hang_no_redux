import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./DemoCoponent/DemoFunctionComponent";
import { DemoClassComponent } from "./DemoCoponent/DemoClassComponent";
// import BaiTapLayout from "./BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import HandlingEvent from "./HandlingEvent/HandlingEvent";
import DieuKien from "./DieuKien/DieuKien";
import BaiTapChonMauXe from "./BaiTapChonMauXe/BaiTapChonMauXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
// import Props from "./Props/Props";
import { dataProps } from "./Props/data";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang";
import "antd/dist/antd.css";
import DemoMiniRedux from "./DemoMiniRedux/DemoMiniRedux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
// import { Provider } from "react-redux";
function App() {
  return (
    <div>
      {/* <DemoClassComponent />

      <DemoFunctionComponent /> */}

      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandlingEvent /> */}
      {/* <DieuKien /> */}
      {/* <BaiTapChonMauXe /> */}

      {/* <RenderWithMap /> */}
      {/* <Props dsdt={dataProps} /> */}

      {/* <LiftingStateUp /> */}
      <BaiTapGioHang />
      {/* <DemoMiniRedux /> */}
      {/* <BaiTapGioHangRedux /> */}
    </div>
  );
}

export default App;
