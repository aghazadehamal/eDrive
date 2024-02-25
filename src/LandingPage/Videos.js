
import VideoCard from './VideoCard';

function Videos() {
  return (
    <div className="uniqueVideoCards">
      {/* Video kartları burada kullanılacak */}
      <div className="videoCardWrapper">
        <VideoCard url="/v1.MOV" />
        <p style={{textAlign: "left", marginLeft: "10px", fontSize: "24px", lineHeight: "36px"}} >Giriş videosu</p>
      </div>

      <div className="videoCardWrapper">
        <VideoCard url="/v2.MOV" />
        <p style={{textAlign: "left", marginLeft: "10px", fontSize: "24px", lineHeight: "36px"}}  >Giriş videosu</p>
      </div>

      <div className="videoCardWrapper">
        <VideoCard url="/v3.MOV" />
        <p style={{textAlign: "left", marginLeft: "10px", fontSize: "24px", lineHeight: "36px"}}  >Giriş videosu</p>
      </div>
    </div>
  );
}

export default Videos;
