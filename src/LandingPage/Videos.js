import './CampaignSection.css'; // İlgili CSS stil dosyası


import VideoCard from './VideoCard';
function Videos() {
 
    return (  
        <div className="uniqueVideoCards">
        {/* Video kartları burada kullanılacak */}
        <VideoCard url="/v1.MOV" />
        <VideoCard url="/v2.MOV" />
        <VideoCard url="v3.MOV" />
      </div>
    );
}

export default Videos;