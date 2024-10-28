import { DeviceStore } from "../store/DeviceStore";
import UserStore from "../store/UserStore";

export interface IContext {
  userStore: UserStore
  deviceStore: DeviceStore
}