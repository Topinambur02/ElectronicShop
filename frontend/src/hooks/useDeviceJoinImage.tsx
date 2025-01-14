import { getAllDevices } from "../http/DeviceApi";
import { getAllFiles } from "../http/FileApi";
import { DeviceStore } from "../store/DeviceStore";
import { FileType } from "../types/FileType";

const useDeviceJoinImage = async (deviceStore?: DeviceStore) => {
    const devices = await getAllDevices();
    const files = await getAllFiles();

    const deviceWithImage = devices.map(device => ({
        ...device,
        image: files.find((file: FileType) => file.id === device.imageId)
    }
    ));

    deviceStore?.setDevices(deviceWithImage);
}

export default useDeviceJoinImage;