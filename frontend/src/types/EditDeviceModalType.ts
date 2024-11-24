import { DeviceType } from "./DeviceType";

export interface IProps {
    device: DeviceType;
    onClose: () => void;
}