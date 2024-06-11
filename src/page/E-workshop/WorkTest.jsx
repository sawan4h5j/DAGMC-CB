import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Install axios using npm or yarn

const WorkTest = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const fetchPlaylistVideos = async (playlistIds) => {
            try {
                const apiKey = import.meta.env.VITE_CLOUDKEY;
                const allVideos = [];
                for (const playlistId of playlistIds) {
                    const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
                        params: {
                            part: 'snippet',
                            maxResults: 17,
                            playlistId: playlistId,
                            key: apiKey,
                        }
                    });
                    const filteredVideos = response.data.items.slice(1);
                    allVideos.push(...filteredVideos);
                }
                setVideos(allVideos);
                setCurrentVideo(allVideos[0]);
            } catch (error) {
                console.error('Error fetching playlist videos:', error);
            }
        };

        const playlistIds = [
            "PL1pf33qWCkmgJM3oj1tKGq4BHPmIrHjTQ", 
            "PL1pf33qWCkmiwn6hcUPsoS1j8ch-vIdLk", 
             
        ];

        fetchPlaylistVideos(playlistIds);
    }, []);

    const handleVideoClick = (video)=>{
        setCurrentVideo(video)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="glass py-14">
            <div className="max-w-4xl mx-auto px-4">
                {/* Video Section */}
                <div className="mb-8 relative rounded-lg shadow-lg">
                    {currentVideo && (
                        <iframe
                            className="w-full h-96 rounded-xl"
                            src={`https://www.youtube.com/embed/${currentVideo?.snippet?.resourceId?.videoId}`}
                            title={currentVideo?.snippet?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Text Content */}
                <div className="mb-8 text-gray-200">
                    <h2 className="text-3xl font-bold mb-4">{currentVideo && currentVideo?.snippet?.title}</h2>
                </div>

                {/* Related Videos Section */}
                <div className="mb-8 text-gray-200">
                    <h3 className="text-2xl font-bold mb-4">Related Videos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {videos.map(video => (
                            <div key={video.id} className="bg-gray-800 rounded-lg shadow-md p-4">
                                <img
                                    className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                                    src={video?.snippet?.thumbnails?.default.url}
                                    alt={video?.snippet?.title}
                                    onClick={() => handleVideoClick(video)}
                                />
                                <h4 className="text-lg font-semibold mb-2">{video?.snippet.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTest;
