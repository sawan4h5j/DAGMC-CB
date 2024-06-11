import DropzoneComponent from "../../components/DropzoneComponent";

const UploadImage = () => {
    
    return (
        <div className="mt-9">
            {/* <input type="file"  accept="image/jpeg, image/png" /> */}

            <DropzoneComponent/>
        </div>
    );
};

export default UploadImage;