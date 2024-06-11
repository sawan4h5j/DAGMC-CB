import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function DropzoneComponent(props) {
    const [files, setFiles] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const thumbs = files.map(file => (
        <div key={file.name}>
            <img
                src={file.preview}
                alt={file.name}
            />
        </div>
    ));

    
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const uploadImageToImgBB = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://api.imgbb.com/1/upload?key=f6b75ffe121b1c5b03dbbd0d18c7f3d9', formData);
            toast.success('Image Upload Successfully')

            return response.data.data.url;
        } catch (error) {
            console.error('Error uploading image to ImgBB:', error);
            return null;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const uploadedUrls = await Promise.all(files.map(file => uploadImageToImgBB(file)))
        // console.log('Uploaded image URLs:', uploadedUrls);
        setUploadedImages(uploadedUrls.filter(url => url !== null));

        const imageData = uploadedUrls.map(url => ({ 'url': url }));
        console.log('dara',imageData[0]);

        const img = imageData[0]
        axios.post('https://dagmc-server.vercel.app/gallery', img)
            .then(res => {
                console.log('Response from backend:', res.data);
                if (res.data.insertedCount > 0) {
                    toast.success('Images uploaded successfully!');
                }
            })
            .catch(error => {
                console.error('Error uploading images to backend:', error);
                // Handle error (e.g., display error message)
            });


    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <div>Drag and drop your images here.</div>
                </div>
                <aside className='mt-10 max-w-96 flex justify-center'>
                    {thumbs}
                </aside>
                <button type='submit' className='w-full mt-8 border py-2 mb-4'>Submit</button>
            </form>
            {/* <div>
                <h2>Uploaded Images:</h2>
                {uploadedImages.map((url, index) => (
                    <img key={index} src={url} alt={`Uploaded Image ${index}`} />
                ))}
            </div> */}
        </section>
    )
}

export default DropzoneComponent;